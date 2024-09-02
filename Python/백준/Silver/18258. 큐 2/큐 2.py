from collections import deque
import sys

input = sys.stdin.readline  # 입력 속도를 높이기 위해 사용

N = int(input())

Qu = deque()  # deque를 사용하여 큐를 구현

for _ in range(N):
    cmd = input().split()
    
    if cmd[0] == 'push':
        Qu.append(cmd[1])
    elif cmd[0] == 'front':
        if len(Qu) == 0:
            print(-1)
        else:
            print(Qu[0])
    elif cmd[0] == 'back':
        if len(Qu) == 0:
            print(-1)
        else:
            print(Qu[-1])
    elif cmd[0] == 'size':
        print(len(Qu))
    elif cmd[0] == 'empty':
        if len(Qu) == 0:
            print(1)
        else:
            print(0)
    elif cmd[0] == 'pop':
        if len(Qu) == 0:
            print(-1)
        else:
            print(Qu.popleft())  # O(1)로 앞쪽 요소를 제거
