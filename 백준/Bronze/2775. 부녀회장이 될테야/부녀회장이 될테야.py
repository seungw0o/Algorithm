import sys

T = int(sys.stdin.readline().strip()) 
answer = []


dp = [[0] * 15 for _ in range(15)]  


for i in range(1, 15):
    dp[0][i] = i


for floor in range(1, 15):  
    for room in range(1, 15):  
        dp[floor][room] = dp[floor - 1][room] + dp[floor][room - 1]

for _ in range(T):
    k = int(sys.stdin.readline().strip())  
    n = int(sys.stdin.readline().strip())  
    answer.append(dp[k][n])


sys.stdout.write("\n".join(map(str, answer)) + "\n")
