import  sys
import  math

N, K = map(int, sys.stdin.readline().split())

facN = math.factorial(N)
facK = math.factorial(K)
facNK = math.factorial(N-K)
result = facN / (facK * facNK)


sys.stdout.write(str(int(result)))