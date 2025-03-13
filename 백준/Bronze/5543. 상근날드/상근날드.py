import sys

arr = []

for i in range(5):
    arr.append(int(sys.stdin.readline()))


burger = arr[0:3]
juice = arr[3:]

mburger = min(burger)
mjuice = min(juice)


sys.stdout.write(str((mburger + mjuice) - 50))