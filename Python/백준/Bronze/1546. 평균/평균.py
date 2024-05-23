N = input()
point = list(map(int, input().split()))
maxPoint = max(point)
newPoint = []
average = 0
for i in range(int(N)):
    newPoint.append((int(point[i]) / int(maxPoint)) * 100)
    average += newPoint[i]
print(int(average)/int(N))