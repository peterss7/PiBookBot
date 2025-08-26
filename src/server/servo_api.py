from flask import Flask, request, jsonify
from flask_cors import CORS
from adafruit_servokit import ServoKit
from motion import kit, _current, move_smooth_async, clamp

# 16-channel Servo HAT
kit = ServoKit(channels=16)

app = Flask(__name__)
CORS(app)
current = {}

def clamp(v, lo, hi): return max(lo, min(hi, v))

@app.route("/servo", methods=["POST"])
def move_servo():
    try:
        channel = int(request.args.get("channel", 0))   # default channel 0
        angle   = float(request.args.get("angle", 90))  # default 90°
    except Exception:
        return jsonify(error="Provide ?channel=<0-15>&angle=<0-180>"), 400

    # Move servo
    kit.servo[channel].angle = angle
    return jsonify(ok=True, channel=channel, angle=angle)


@app.route("/servo/nudge", methods=["POST"])
def servo_nudge():
    ch = int(request.args.get("channel", 0))
    delta = float(request.args.get("delta", 5))   # degrees per nudge
    lo = float(request.args.get("min", 0))
    hi = float(request.args.get("max", 180))
    angle = current.get(ch, 90.0)
    angle = clamp(angle + delta, lo, hi)
    current[ch] = angle
    kit.servo[ch].angle = angle
    return jsonify(ok=True, channel=ch, angle=angle)

@app.route("/servo/center", methods=["POST"])
def servo_center():
    ch = int(request.args.get("channel", 0))
    ms = int(request.args.get("ms", 600)) 
    ok = move_smooth_async(ch, 90.0, ms, steps= max(10, ms//15))
    return jsonify(ok=True, channel=ch, target=90, ms=ms)

@app.post("/servo/move_smooth")
def servo_move_smooth():
    ch = int(request.args.get("channel", 0))
    target = float(request.args.get("angle", 90))
    ms = int(request.args.get("ms", 600))
    ok = move_smooth_async(ch, target, ms)
    return jsonify(ok=ok, channel=ch, target=clamp(target), ms=ms)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
