import sys

N = int(sys.stdin.readline().strip())
stack = []


for i in range(N):
    cmd = sys.stdin.readline().strip()
    parts = cmd.split()
    if parts[0] == 'push':
        value = int(parts[1])
        stack.append(value)
    elif parts[0] == 'pop':
        if len(stack) == 0:
            sys.stdout.write('-1\n')
        else:
            sys.stdout.write(str(stack.pop()) + "\n")
    elif parts[0] == 'size':
        sys.stdout.write('%d\n' % len(stack))
    elif parts[0] == 'empty':
        if len(stack) == 0:
            sys.stdout.write('1\n')
        else:
            sys.stdout.write('0\n')
    elif parts[0] == 'top':
        if len(stack) == 0:
            sys.stdout.write('-1\n')
        else:
            sys.stdout.write(str(stack[-1]) + "\n")