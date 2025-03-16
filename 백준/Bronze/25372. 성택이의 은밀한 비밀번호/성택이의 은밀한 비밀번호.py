import sys

N = int(sys.stdin.readline())
answer = []
for i in range(N):
    password = sys.stdin.readline().strip()
    if  6 <= len(password) <= 9:
        answer.append("yes")
    else:
        answer.append("no")

for i in answer:
    sys.stdout.write(i+"\n")