import  sys
comments = []
answer = []

while True:
    comment = sys.stdin.readline().strip()
    if comment == '#':
        break
    comments.append(comment)


def count_vowels(comment):
    vowels = 'aeiouAEIOU'
    return sum(1 for char in comment if char in vowels)

for comment in comments:
    answer.append(count_vowels(comment))

for answer in answer:
    print(answer)