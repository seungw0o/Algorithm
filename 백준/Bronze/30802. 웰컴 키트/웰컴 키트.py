import math

N = int(input())
TSize = list(map(int, input().split()))
TP = list(map(int, input().split()))
TBundle = 0
PBundle = []

for i in range(6):
    TBundle += math.ceil(TSize[i] / TP[0])

PBundle.append(int(N/TP[1]))
PBundle.append(N%TP[1])



print(TBundle)
print(*PBundle)
