def printPattern(n):
    for i in range(1, n+1):
        pattern = ""
        for j in range(1,i+1):
            pattern += str(j)+" "
        print(pattern)

printPattern(5)