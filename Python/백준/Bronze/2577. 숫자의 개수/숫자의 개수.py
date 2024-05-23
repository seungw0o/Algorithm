A = input()
B = input()
C = input()

multiply = int(A)*int(B)*int(C)
multiply_str = str(multiply)
for i in range(10):
    findNumber = multiply_str.count(str(i))
    print(findNumber)