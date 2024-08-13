#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int num_list[], size_t num_list_len, int n) {
    int* answer = (int*)malloc((num_list_len / n + 1) * sizeof(int));
    int index = 0;

    for (int i = 0; i < num_list_len; i += n) {
        answer[index] = num_list[i];
        index++;
    }

    return answer;
}
