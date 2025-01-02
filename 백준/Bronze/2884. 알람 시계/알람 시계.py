T = list(map(int, input().split()))

MT = T[1] - 45

if MT >= 0:
    T[1] -= 45
else:
    T[1] = 0
    if T[0] == 0:
        T[0] = 23
        T[1] = 60 + MT
    else:
        T[0] -= 1
        T[1] = 60 + MT

print(T[0], T[1])