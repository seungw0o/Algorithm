#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int *solution(const char *intStrs[], size_t intStrs_len, int k, int s, int l) {
  int *answer = (int *)malloc(sizeof(int) * intStrs_len);
  int cnt = 0;
  for (int i = 0; i < intStrs_len; i++) {
    char *cpy_str = (char *)malloc(strlen(intStrs[i]) + 1); 
    strcpy(cpy_str, intStrs[i]);  // 사용할 문자열을 복사합니다.
    
    int j = 0;    
    char *cut_str = (int *)malloc(l);
    
    for (j = 0; j < l; j++) {
      cut_str[j] = cpy_str[s + j]; // 조건에 맞게 문자열을 자른 값을 대입합니다.
    }
    cut_str[j] = '\0';
    int num = atoi(cut_str); // 자른 문자열을 숫자로 바꿉니다.
    if (num > k) {
      answer[cnt] = num;  // k보다 크다는 조건을 만족하면 배열에 추가합니다. 
      cnt++;
    }
  }
  return answer;
}