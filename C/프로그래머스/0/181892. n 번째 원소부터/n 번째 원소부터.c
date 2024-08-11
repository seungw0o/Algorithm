#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int num_list[], size_t num_list_len, int n) {
    int count = num_list_len - n + 1;
    int* answer = (int*)malloc(count * sizeof(int));

    for (int i = 0; i < count; i++) {
        answer[i] = num_list[n - 1 + i];
    }

    return answer;
}
