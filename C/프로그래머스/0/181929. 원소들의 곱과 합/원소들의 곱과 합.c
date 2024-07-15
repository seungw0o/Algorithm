#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

// num_list_len은 배열 num_list의 길이입니다.
int solution(int num_list[], size_t num_list_len) {
  int times = 1;
  int plus = 0;
  for (int i = 0; i < num_list_len; i++) {
    times *= num_list[i];
    plus += num_list[i];
  }
  return times < plus * plus;
}