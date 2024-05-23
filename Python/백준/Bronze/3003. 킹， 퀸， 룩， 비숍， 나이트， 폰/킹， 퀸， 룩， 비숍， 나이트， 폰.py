rightPieces = [1, 1, 2, 2, 2, 8]
pieces = list(input().split())
requirePieces = []

for i in range(int(6)):
    requirePieces.append((rightPieces[i]) - int(pieces[i]))

print(*requirePieces)
