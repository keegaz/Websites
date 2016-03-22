/* This program takes 3 numbers and feedsback to the user with the lowest */

var num1, num2, num3;

//Prompt user
num1 = prompt("Enter the first number");
num2 = prompt("Enter the second number");
num3 = prompt("Enter the thrid number");

//Conditionals

if (num1 < num2)
{
    document.write(num1, " is the lowest!");
}

else if (num2 < num1)
{
    document.write(num2, " is the lowest!");
}

else if (num3 < num1)
{
    document.write(num3, " is the lowest!");
}
