import sys

def sieve_of_eratosthenes(n):
    if n < 2:
        return []

    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False

    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, n + 1, i):
                is_prime[j] = False

    return [i for i in range(n + 1) if is_prime[i]]


def primes_in_range(start, end):
    if start > end:
        start, end = end, start


    primes = sieve_of_eratosthenes(end)


    return [p for p in primes if p >= start]


start, end = map(int, sys.stdin.readline().split())


primes = primes_in_range(start, end)
for prime in primes:
    sys.stdout.write(str(prime) + '\n')
