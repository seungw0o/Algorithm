import sys

N, M = map(int, sys.stdin.readline().split())
poketmon = []
problem = []
answer = []
poketmon_dict = {}

for i in range(N):
    name = sys.stdin.readline().strip()
    poketmon.append(name)
    poketmon_dict[name] = i + 1

for _ in range(M):
    problem.append(sys.stdin.readline().strip())

for i in problem:
    if i.isdigit():
        index = int(i) - 1
        answer.append(poketmon[index])
    else:
        answer.append(poketmon_dict[i])

for ans in answer:
    print(ans)
