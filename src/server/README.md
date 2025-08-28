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
> mjpg.log 2>&1 &

## To Grab files from pi
scp pi@<pi-ip>:/tmp/snap.jpg .

## Shell Script Cheat Sheet
### run program and log output to file
python x_api.py > x_api.log 2>&1 &
### view log live in new window
tail -f x_api.log
## Tasks
### Check Logs
tail -f FILE
### Find task by port
sudo lsof -i :PORT
### Kill task by PID
sudo kill -9 PID
### Kill task by file of execution
pkill -f FILE

## Troubleshooting Camera
### List video devices
ls /dev/video*
### Query device info
v4l2-ctl --list-devices
### Quick capture test
fswebcam test.jpg
### identify task of port, kill task of port
sudo lsof -i :5001
sudo kill -9 <PID>

mjpg_streamer \
  -i "input_uvc.so -d /dev/video0 -r 1280x720 -f 15" \
  -o "output_http.so -l 0.0.0.0 -p 8080 -w /usr/local/share/mjpg-streamer/www" \
  > mjpg.log 2>&1 &
