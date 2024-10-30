
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

char* solution(const char* code) {
    int idx = 0, mode = 0, len = strlen(code);
    char* answer = (char*)malloc(100001);
    for(int i = 0; i < len; i++) {
        if(code[i] == '1') mode = 1 - mode;
        else {
            if(mode) {
                if(i & 1) answer[idx++] = code[i];
            } else {
                if(!(i & 1)) answer[idx++] = code[i];
            }
        }
    }
    answer[idx] = '\0';
    if(!idx) strcpy(answer, "EMPTY");
    return answer;
}

