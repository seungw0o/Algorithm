T = int(input())
answer = []

for i in range(T):
    s=list(input().split())
    cnt = 0
    for j in range(int(s[0]), int(s[1]) + 1):
        cnt += str(j).count('0')
    answer.append(cnt)

for ans in answer:
    print(ans)