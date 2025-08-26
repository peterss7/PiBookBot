import time, math, threading
from adafruit_servokit import ServoKit
from .config import LIMITS

kit = ServoKit(channels=16)
_current = {}       # last commanded angle per channel
_busy = {}          # channel is moving

def clamp(v, lo=0, hi=180): return max(lo, min(hi, v))
def clamp_ch(ch, v):
    lo, hi = LIMITS.get(ch, (0,180))
    return clamp(v, lo, hi)

def ease_cos(t: float) -> float:
    return (1 - math.cos(math.pi * t)) / 2  # 0..1 -> 0..1 ease-in-out

def move_smooth(ch: int, target: float, ms: int = 600, steps: int = 40):
    """Blocking tween to 'target' with cosine easing."""
    start = _current.get(ch, kit.servo[ch].angle or 90)
    target = clamp_ch(ch, target)
    steps  = max(5, steps)
    dt     = ms / 1000 / steps
    for i in range(1, steps+1):
        a = start + (target - start) * ease_cos(i/steps)
        kit.servo[ch].angle = a
        _current[ch] = a
        time.sleep(dt)

def move_smooth_async(ch: int, target: float, ms: int = 600, steps: int = 40):
    """Non-blocking tween; ignores if that channel is already moving."""
    if _busy.get(ch): return False
    _busy[ch] = True
    def worker():
        try: move_smooth(ch, target, ms, steps)
        finally: _busy[ch] = False
    threading.Thread(target=worker, daemon=True).start()
    return True

def set_angle(ch: int, angle: float):
    """Immediate set with clamping; updates _current."""
    a = clamp_ch(ch, angle)
    kit.servo[ch].angle = a
    _current[ch] = a
    return a

def get_angle(ch: int):
    """Best-effort last commanded angle (servos don't give real feedback)."""
    return _current.get(ch, kit.servo[ch].angle or 90)

def estop():
    """Release all servos (disable PWM). NOTE: some hat libs use None to detach."""
    for ch in range(16):
        kit.servo[ch].angle = None
