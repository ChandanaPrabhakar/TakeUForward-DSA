def printPattern(n):
    for i in range(n):
        pattern = ""
        for j in range(i+1):
            pattern += "* "
        print(pattern)

n = int(input())
printPattern(n)