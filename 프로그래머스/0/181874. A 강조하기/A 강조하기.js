function solution(myString) {
    
    return myString.toLowerCase().split('').map(i => i === 'a' ? i.toUpperCase() : i).join('')
    
}