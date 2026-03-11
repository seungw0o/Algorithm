def dfs(idx, sum, numbers, target):
    
    if idx == len(numbers):
        if sum == target:
            return 1
        else:
            return 0
    
    
    plus = dfs(idx+1, sum + numbers[idx], numbers, target)
    
    minus = dfs(idx+1, sum - numbers[idx], numbers, target)
        
    return plus + minus


def solution(numbers, target):
    return dfs(0,0,numbers,target)
    