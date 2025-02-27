
arr = []

num = 0
while len(arr) < 10001:
    if '666' in str(num):
        arr.append(num)
    num += 1


N = int(input())

print(arr[N-1])