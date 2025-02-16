import sys

T = int(sys.stdin.readline().strip())
answer = []
for _ in range(T):
    H, W, N = map(int, sys.stdin.readline().split())
    floor = (N-1) % H + 1
    room = (N-1) // H + 1   
    answer.append(f"{floor}{room:02d}")

sys.stdout.write("\n".join(map(str, answer)) + "\n")