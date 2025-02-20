import sys


members = []

while True:
    member = sys.stdin.readline().strip()

    if member == '# 0 0':
        break

    members.append(member.split())

for i in range(0, len(members)):
    if int(members[i][1]) > 17:
        members[i][1] = 'Senior'
    elif int(members[i][2]) >= 80:
        members[i][1] = 'Senior'
    else:
        members[i][1] = 'Junior'
    members[i].pop()



for member in members:
    print(' '.join(member))
