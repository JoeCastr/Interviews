Problem:
Write a method that takes a string as an input and converts it to an integer.
Do not use any type of built-in methods like int.Parse or atoi.
Remember it's always good to include both positive and negative test cases.
Error handling of your choice should be done in some way.

Remember to add appropriate comments to explain what you are doing.

Input: string

Return: integer

Example input:
"baseball"
"forty-two"
"repeat after me"
"What in the heck!?"
"EWOXN-9300161-QUX"
"--]{]''?><<>,.//f;s/fa/sfy"
"#($_!+#$)@$%*%"
"hey\ndude\nwhat's\nup?"
" a b cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=_+\`|~,./<>?\;'[]:"{}n"

Data structure(s):
Object that correlates a number to a string value

Algorithm:
Take string input
split it into individual characters
lookup the number value for the character
--if the character doesn't exist in the library
----use 99 as the number value
--add the number value to the return string
convert the return string to an integer and return
