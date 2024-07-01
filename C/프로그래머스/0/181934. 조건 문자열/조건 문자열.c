#include <stdbool.h>
#include <stdlib.h>

int solution(const char* ineq, const char* eq, int n, int m) {
    int answer = 0;

    if(*ineq == '>')
    {
        if(*eq == '=') return n >= m;
        else return n > m;
    }
    else
    {
        if(*eq == '=') return n <= m;
        else return n < m;
    }
}