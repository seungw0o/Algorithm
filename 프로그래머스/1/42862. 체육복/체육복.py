def solution(n, lost, reserve):
    lost_set = set(lost)
    reserve_set = set(reserve)

    real_lost = lost_set - reserve_set
    real_reserve = reserve_set - lost_set

    for r in sorted(real_reserve):
        if r - 1 in real_lost:
            real_lost.remove(r - 1)
        elif r + 1 in real_lost:
            real_lost.remove(r + 1)

    return n - len(real_lost)