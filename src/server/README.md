## Install requirements
source .venv/bin/activate  
pip install -r requirements.txt

## Install dependencies
sudo apt update  
xargs -a dependencies.txt sudo apt install -y

## Running Setup.
bash src/server/setup.sh

## Make sure your stream gives a still frame
curl -s "http://annex.local:8080/?action=snapshot" -o /tmp/snap.jpg && file /tmp/snap.jpg  

## Make sure your OCR JSON responds.
curl -s "http://annex.local:5001/ocr/latest" | jq .  


## Command to start camera stream
mjpg_streamer \
  -i "input_uvc.so -d /dev/video0 -r 1280x720 -f 15" \
  -o "output_http.so -l 0.0.0.0 -p 8080 -w /usr/local/share/mjpg-streamer/www"

## To Grab files from pi
scp pi@<pi-ip>:/tmp/snap.jpg .


## Troubleshooting Camera
### List video devices
ls /dev/video*
### Check Logs
tail -f <FILE>
### Query device info
v4l2-ctl --list-devices
### Quick capture test
fswebcam test.jpg
