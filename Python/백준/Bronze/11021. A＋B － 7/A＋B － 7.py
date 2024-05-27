N = int(input())
Result = []

for i in range(N):
    AB = list(map(int, input().split()))
    Result.append(AB[0]+AB[1])
    AB = []
for i in range(N):
    print("Case #" + str(i+1) + ": " + str(Result[i]))
