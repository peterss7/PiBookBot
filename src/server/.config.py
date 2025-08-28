# Channel maps & safety limits in one place
# ARM_L = [0,1,2,3,4,5]    # base, shoulder, elbow, wristPitch, wristYaw, gripper
# ARM_R = [6,7,8,9,10,11]
PAN_TILT = [8,9]

# Per-channel safe limits (min/max degrees). Default to (0,180) if not present.
LIMITS = {
    # example clamps to keep linkages safe:
    0: (15, 165),
    1: (20, 160),
    2: (20, 160),
    8: (0, 180),
    9: (0, 180),
    
    # ...add others as you tune
}
