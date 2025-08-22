# ocr_service.py
import os, time, threading, io, requests, cv2, numpy as np, pytesseract
from flask import Flask, jsonify
from flask_cors import CORS

SNAP_URL   = os.getenv("SNAP_URL", "http://127.0.0.1:8080/?action=snapshot")
INTERVAL   = float(os.getenv("OCR_INTERVAL", "0.6"))
MIN_CONF   = int(os.getenv("OCR_MIN_CONF", "60"))
TESS_CFG   = os.getenv("TESS_CFG", "--oem 1 --psm 6")  # good general config

app = Flask(__name__)
CORS(app, resources={r"/ocr/*": {"origins": "*"}})

state = {"boxes": [], "frame_w": 0, "frame_h": 0, "ts": 0.0}

def grab_and_ocr():
    try:
        r = requests.get(SNAP_URL, timeout=1.5)
        r.raise_for_status()
        img_arr = np.frombuffer(r.content, dtype=np.uint8)
        frame = cv2.imdecode(img_arr, cv2.IMREAD_COLOR)
        if frame is None: return

        h, w = frame.shape[:2]
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        # light denoise/threshold helps OCR a LOT
        gray = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)[1]

        data = pytesseract.image_to_data(
            gray, 
            output_type=pytesseract.Output.DICT,
            config=TESS_CFG
        )
        boxes = []
        for i, txt in enumerate(data["text"]):
            txt = txt.strip()
            conf = int(float(data["conf"][i])) if data["conf"][i] != "-1" else -1
            if txt and conf >= MIN_CONF:
                boxes.append({
                    "text": txt,
                    "conf": conf,
                    "x": int(data["left"][i]),
                    "y": int(data["top"][i]),
                    "w": int(data["width"][i]),
                    "h": int(data["height"][i]),
                })

        state.update({"boxes": boxes, "frame_w": w, "frame_h": h, "ts": time.time()})
    except Exception:
        pass

def worker():
    while True:
        grab_and_ocr()
        time.sleep(INTERVAL)

@app.route("/ocr/latest")
def latest():
    return jsonify(state)


if __name__ == "__main__":
    threading.Thread(target=worker, daemon=True).start()
    app.run(host="0.0.0.0", port=5001)