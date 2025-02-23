import sys


H, M, S = map(int, sys.stdin.readline().split())

addSec = int(sys.stdin.readline())


total_seconds = H * 3600 + M * 60 + S + addSec


new_H = (total_seconds // 3600) % 24  
new_M = (total_seconds % 3600) // 60
new_S = total_seconds % 60


sys.stdout.write(f"{new_H} {new_M} {new_S}\n")
