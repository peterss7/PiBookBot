#!/bin/bash

echo "Installing dependencies..."
sudo apt update && \
  xargs -a dependencies.txt sudo apt install -y
echo '✅ Dependencies installed.'

echo "Installing requirements"
source .venv/bin/activate && \
  pip install -r requirements.txt

# Open live logs
echo '✅ Requirements installed.'
