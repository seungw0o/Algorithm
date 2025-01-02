N = 10

num = []

for i in range(N):
    num.append(int(input()) % 42)

num = set(num)
num = list(num)

print(len(num))