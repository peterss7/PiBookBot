#!/bin/bash

echo "Initializing the Pi Book Bot...."

# Setting up virtual env
echo "Setting up virtual env..."
# virtualenv .venv
# source .venv/bin/activate

# Initialize Camera Stream
echo "Beginning Video Stream..."
mjpg_streamer \
  -i "input_uvc.so -d /dev/video0 -r 1280x720 -f 15" \
  -o "output_http.so -l 0.0.0.0 -p 8080 -w /usr/local/share/mjpg-streamer/www" \
  > mjpg.log 2>&1 &

echo "✅ mjpg_streamer started, logging to mjpg.log"

# Initialize the OCR api
echo "Starting OCR api..."
source .venv/bin/activate && \
	python ocr_api.py > ocr.log 2>&1 &

  # Initialize the Servo api
# echo "Starting Servo api..."
# source .venv/bin/activate && \
# 	cd .. && python server.servo_api.py > server/servo.log 2>&1 &

echo "🚀 Starting Servo API..."

# go to project root
cd ~/PiBookBot/src || exit 1

# activate venv
source server/.venv/bin/activate

# run as module so relative imports work, log to file, background
python -m server.servo_api > server/servo.log 2>&1 &

# Open live logs
echo '✅ All services launched in separate terminals.'
