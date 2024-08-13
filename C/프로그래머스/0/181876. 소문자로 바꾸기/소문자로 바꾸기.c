#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* myString) {
    // myString의 길이를 구합니다.
    size_t len = strlen(myString);
    
    // 대문자로 변환된 문자열을 저장할 메모리를 동적 할당합니다.
    char* answer = (char*)malloc((len + 1) * sizeof(char));
    
    // myString의 각 문자를 대문자로 변환하여 answer에 저장합니다.
    for (size_t i = 0; i < len; i++) {
        answer[i] = tolower(myString[i]);
    }
    answer[len] = '\0';  // 문자열의 끝을 표시하기 위해 널 문자를 추가합니다.
    
    return answer;
}
