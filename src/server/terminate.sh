#!/bin/bash
# Kill robot services and delete logs

echo "🛑 Stopping services..."

# Kill mjpg_streamer
pkill -f mjpg_streamer

# Kill OCR service
pkill -f ocr_api.py

# Kill Servo service
pkill -f servo_api.py

# Optional: if you just want to nuke all python3 processes (⚠️ be careful!)
# pkill -9 python3

echo "🧹 Removing logs..."
rm -f mjpg.log ocr.log servo.log

echo "✅ Cleanup complete."
