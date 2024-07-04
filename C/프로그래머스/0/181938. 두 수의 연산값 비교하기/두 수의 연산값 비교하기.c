#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int a, int b) {
    char str_cat[10];  
    sprintf(str_cat, "%d%d", a, b);
    
    int num_cat = atoi(str_cat);
    int num_times = 2 * a * b;
    
    if (num_cat > num_times)
        return num_cat;
    else
        return num_times;

}