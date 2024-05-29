NK = list(map(int, input().split()))
Ndiv = []

for i in range(NK[0]):
    if NK[0] % int(i+1) == 0:
        Ndiv.append(i+1)
Ndiv.sort()
if len(Ndiv) < NK[1]:
    print(0)
elif len(Ndiv) >= NK[1]:
    print(Ndiv[NK[1]-1])
