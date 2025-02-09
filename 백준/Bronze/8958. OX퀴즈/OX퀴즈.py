from itertools import groupby

N = int(input()) 
answer = []

for _ in range(N):
    OX = input()  
    result = [(char, len(list(group))) for char, group in groupby(OX)]

    temp = 0  
    for char, count in result:  
        if char == 'O':
            temp += sum(range(1, count + 1))  
    answer.append(temp)  

for a in answer:
    print(a)  
