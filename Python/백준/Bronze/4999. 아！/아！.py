can = input()
want = input()

if can.count('a') >= want.count('a'):
    print('go')
elif can.count('a') < want.count('a'):
    print('no')