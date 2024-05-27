N = input()
answer = 1

for i in range(int(N)):
    answer *= int(i+1)
print(answer)