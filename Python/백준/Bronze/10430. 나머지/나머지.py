ABC = list(map(int, input().split()))
A = ABC[0]
B = ABC[1]
C = ABC[2]
print((A + B) % C)
print(((A % C) + (B % C)) % C)
print((A * B) % C)
print(((A % C) * (B % C)) % C)
