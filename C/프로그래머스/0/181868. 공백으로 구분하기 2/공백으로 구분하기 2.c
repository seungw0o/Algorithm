#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

char** solution(const char* my_string) {
    int count = 0; // 단어 개수를 세기 위한 변수 초기화
    int length = strlen(my_string);
    char* temp_string = (char*)malloc(length + 1); // 공백을 제거한 임시 문자열
    
    // 공백 제거하여 임시 문자열에 저장
    int index = 0;
    for (int i = 0; i < length; i++) {
        if (my_string[i] != ' ') {
            temp_string[index] = my_string[i];
            index++;
        }
    }
    temp_string[index] = '\0'; // 문자열 끝을 나타내는 널 문자 추가
    
    // 단어 개수 세기
    char* word = strtok(temp_string, " ");
    while (word != NULL) {
        count++;
        word = strtok(NULL, " ");
    }
    
    // 단어 추출 및 저장
    char** answer = (char**)malloc(count * sizeof(char*));
    word = strtok((char*)my_string, " ");
    index = 0;
    
    while (word != NULL) {
        answer[index] = (char*)malloc(strlen(word) + 1);
        strcpy(answer[index], word);
        word = strtok(NULL, " ");
        index++;
    }
    
    free(temp_string); // 동적 할당된 임시 문자열 메모리 해제
    
    return answer;
}
