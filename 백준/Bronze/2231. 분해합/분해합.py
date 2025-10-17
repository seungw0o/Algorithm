import sys
#N의 생성자 구하는 문제
def sum_digits_math(n): #n의 각 자릿수 덧셈을 구하는 함수
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

N = int(sys.stdin.readline()) 
M = 0  

for i in range(1, N + 1):
    if i + sum_digits_math(i) == N:
        M = i
        break

print(M)
