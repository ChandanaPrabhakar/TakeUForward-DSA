def printPattern(n):
    for i in range(n):
        pattern = ""
        for j in range(n):
            pattern += "* "
        print(pattern)

printPattern(4)