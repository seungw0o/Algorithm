#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int number, int n, int m) {
    int answer = 0;
    int a = number % n == 0;
    int b = number % m == 0;
    if(a && b){
        answer = 1;
    }
    
    return answer;
}