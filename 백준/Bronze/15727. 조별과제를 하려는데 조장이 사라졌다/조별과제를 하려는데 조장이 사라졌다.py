L = int(input())
CD = [5, 4, 3, 2, 1]
T = 0
D = 0
for i in CD:
    if L == 0:
        break
    if i <= L:
        T += L // i
        L %= i

print(T)
