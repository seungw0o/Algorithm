from collections import deque
import sys

input = sys.stdin.readline
cards = deque()

N = int(input())

for i in range(N):
    cards.append(i+1)
while len(cards) > 1:
    cards.popleft()
    cards.append(cards.popleft())

print(cards[0])
