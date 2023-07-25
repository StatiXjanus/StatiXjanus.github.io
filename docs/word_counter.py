text = input()
print("")
print ("Senctence - " +  text )
print(" ")
print(" ")
print(" ")
print ("Number of Words :")
print(" ")
print(" ")

# word is the dictionary for translate.
# words with the s is meant to be used as a variable for the translate function.
# It get rid of characters so only letters count as word

# The number in list for word is from ASCII table

word = {33 : None,34 : None, 35 : None, 36 : None, 37 : None, 38 : None, 39 : None, 40 : None, 41 : None, 42 : None, 43 : None, 44 : None, 45 : None, 46 : None, 47 : None, 48 : None, 49 : None, 50 : None, 51 : None, 52 : None, 53 : None, 54 : None, 55 : None, 56 : None, 57 : None, 58 : None, 59 : None, 60 : None, 61 : None, 62 : None, 63 : None, 64 : None, 123 : None, 124 : None, 125 : None, 126 : None, 91 : None, 92 : None, 93 : None, 95 : None, 96 : None }     
words  = text.translate (word)

print (len (words.split()))
print(" ")
print(" ")
print("Number of Total Characters Without Space :")
print(" ")
print(" ")
print(len(text.replace(" ","")))
print(" ")
print(" ")
print("Number of Characters With Space :")
print(" ")
print(" ")
print(len(text))
print(" ")
print(" ")
print("Number Of Spaces")
print(" ")
print (text.count(" "))
