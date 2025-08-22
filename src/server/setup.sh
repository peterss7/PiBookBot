#!/usr/bin/env bash
set -euo pipefail

# --- config ---
VENV_DIR=".venv"
# PY_DEPS=(
#   adafruit-circuitpython-servokit
#   adafruit-blinka
#   flask
#   flask-cors
#   smbus2
#   pytesseract
#   pillow
# )
# APT_DEPS=(
#   python3-pip
#   python3-venv
#   python3-dev
#   git
#   build-essential
#   python3-rpi-lgpio      # GPIO on Bookworm (old Bullseye uses: python3-rpi.gpio)
#   python3-libgpiod
#   python3-smbus
#   i2c-tools
# )

# echo "==> Updating apt and installing system packages..."
echo "==> Starting Setup Script"
sudo apt update
# sudo apt install -y "${APT_DEPS[@]}"
xargs -a dependencies.txt sudo apt install -y

# echo "==> Enabling I2C (i2c-dev) if not already enabled..."
# Ensure i2c-dev module loads
# echo i2c-dev | sudo tee /etc/modules-load.d/i2c-dev.conf >/dev/null

# Handle both Bookworm and older paths
# CONFIG_PATH="/boot/firmware/config.txt"
# if [ ! -f "$CONFIG_PATH" ]; then
#   CONFIG_PATH="/boot/config.txt"
# fi

# # Add dtparam=i2c_arm=on if missing
# if ! sudo grep -q '^dtparam=i2c_arm=on' "$CONFIG_PATH"; then
#   echo "dtparam=i2c_arm=on" | sudo tee -a "$CONFIG_PATH" >/dev/null
# fi

# # Load module now (no reboot) if possible
# sudo modprobe i2c-dev || true

# echo "==> Verifying /dev/i2c-1..."
# if [ ! -e /dev/i2c-1 ]; then
#   echo "  /dev/i2c-1 not present yet. A reboot may be required for I2C to appear."
# fi

echo "==> Creating Python venv at ${VENV_DIR} (if missing)..."
if [ ! -d "$VENV_DIR" ]; then
  python3 -m venv "$VENV_DIR"
fi
# shellcheck disable=SC1090
source "${VENV_DIR}/bin/activate"

# echo "==> Upgrading pip/setuptools/wheel..."
# pip install --upgrade pip setuptools wheel

echo "==> Installing Python packages..."
# pip install "${PY_DEPS[@]}"
pip install -r requirements.txt

# echo "==> Quick import test..."
# python - <<'PY'
# import sys
# print("Python:", sys.version.split()[0])
# for m in ["board","busio","adafruit_servokit","flask","pytesseract","PIL"]:
#     try:
#         __import__(m if m!="PIL" else "PIL.Image")
#         print(f"  ok: {m}")
#     except Exception as e:
#         print(f"  FAIL: {m} -> {e}")
# PY

# echo
# echo "All set. If 'i2cdetect -y 1' shows 0x40 for the PCA9685 after a reboot, you're ready."
# echo "You can test a servo with:"
# cat <<'PYTEST'
# source .venv/bin/activate
# python - <<'PY'
# from adafruit_servokit import ServoKit
# kit = ServoKit(channels=16)   # Servo HAT
# kit.servo[0].angle = 90
# print("Moved channel 0 to 90°")
# PY
# PYTEST
