// String Length.
/*
let str="Hello World";
console.log(str.length);// Output 11
*/

// String Concatenation.
/*
let str1="hello";
let str2="hanu";
console.log(str1+str2);// output hellohanu
*/

// String Concatenation using concat operation.
/*
let str1="hello";
let str2="hanu";
console.log(str1.concat(" ",str2));
*/

// Extracting Substring (slice)
/*
let str="JavaScript";
console.log(str.slice(0,4));//Java
*/

// Replacing Text
/*
let str="Hello World";
console.log(str.replace("World","hanu"));//Hello hanu
*/

// Changing Case(toUpperCase&toLowerCase)
/*
let str="hello World"
console.log(str.toUpperCase());//HELLO WORLD
*/

//Changing Case(toLowerCase&toUppercase)
/*
let str="HELLO WORLD";
console.log(str.toLowerCase());//hello world
*/

//Trim method-- Here before spaces and after spaces of the word will be deleted by using trim method...
/*/
let str="    Hello World     ";
console.log(str);
console.log(str.trim());
*/

//Finding a String(indexOf)
/*
let str="Hello World";
console.log(str.indexOf("World"));//6
*/

//Conditional Statements 
/*
let age=18;
if(age >= 18)
{
    console.log("You are an adult");//You are an adult
}
*/

//If else
/*
let a=10;
let b=20;

if(a>b)
{
    console.log("a is greater");
}
else
{
    console.log("b is greater");
}//b is greater
*/

//if-else-if-else Statment
/*
let marks=85;
if(marks >= 90)
{
    console.log("Grade A");
}
else if(marks >= 75)
{
    console.log("Grade B");
}
else
{
    console.log("Grade C");
}//Grade B
*/ 

//switch case
/*
let a="Monday";
switch(a)
{
    case "Monday":
            console.log("Start of the work week!");
            break;
    case "Friday":
            console.log("tuesday");
            break;
    case "Saturday":
            console.log("weekend");
            break;
    case "Sunday":
            console.log("funday");
            break;
    default:
        console.log("It's a regular day");
}//Start of the work week!
*/

//Loop Statement
/*
let a=10;
for(i=0;i<a+1;i++)
{
    console.log(i);
}
*/

//While loop
/*
let i=1;
while(i <=5)
{
    console.log(i);
    i+=1;
}
*/

// Do while loop
/*
let i=1;
do{
    console.log(i)
    i++;
}
while(i<=10);
*/

//Reverse a String (using loop)
/*
let s="hello";
let s1=s.length;
s2=""
//console.log(s1);
for(i=s1-1;i>=0;i--)
{
    s2=s2+s[i];
    //console.log(s[i]);
}
console.log(s2);//olleh
*/

//Count Vowel in a String
/*
let str="javascript";
let count=0;
z=str.length;
for(i=0;i<=z-1;i++)
{
    if(str[i]=='a' || str[i]=='e'|| str[i]=='i'|| str[i]=='o' )
    {
        count=count+1;
    }
}
console.log(count);//3
*/

//Find the largest of three numbers(Using if-else)
/*
let n1=5
let n2=12;
let n3=8;
let large=n1;
if(n2>large)
{
    large=n2;
    #console.log(n2);
}
else if(n3>large)
{
    large=n3;
    #console.log(n3);
}
console.log(large);
*/

//Even numbers from 1 To N(Using for loop)
/*
let n=10;
for(i=2;i<=n;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}
*/

//FizzBuzz
/*
let n=20;
for(i=1;i<=n;i++)
{
    if((i%3 == 0) & (i %5==0))
    {
        console.log("Fizz Buzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
*/

//Functions
//If we want to print the value in document we will use the function
/*
function sum(a,b)
{
    return a+b;
}
console.log(add(2,3));//Output:5
sum(5,6);
*/

/*
function greet(name)
{
    console.log("Hello,"+name);
}
greet("Alice");//Output:Hello,Alice
*/

//Anonymous Function
/*
let mul=function(a,b)
{
    return a*b;
}

let add=function(a,b)
{
    return a+b;
}
console.log(mul(2,3));//Output:6
console.log(add(2,3));//Output:5
*/

//Arrow Function
/*
let div=(a,b)=>a/b;
console.log(div(6,3));//Output:2
*/

//Parameter
//Arguments
//Return

//Getting a input from the user
/*
function calculate()
{
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    //console.log(num1+num2);
    let sum=num1+num2;
    let diff=num1+num2;
    let product=num1*num2;
    let quotient=num1/num2;
}


document.getElementById("Sumresult").textContent=Sum;
document.getElementById("differenceresult").textContent=diff;
document.getElementById("productresult").textContent=product;
document.getElementById("quotientresult").textContent=quotient;
*/

/*
let str = "Hello world";
let str3="hanu";
let str1="someone hate cats and dogs";
document.getElementById("Output").innerHTML=str.replace("world","hanu");
document.getElementById("Output1").innerHTML=str1.replaceAll("hate","love");
*/

//substring(),slice(),substring(),sub()
/*
let str="hello";
let str1="hello world";
let str3="hello";
let str4="hanush";

document.getElementById("Output").innerHTML=str.indexOf("h");
document.getElementById("Output1").innerHTML=str1.substring(3,4);
document.getElementById("Output").innerHTML=str3.slice();
document.getElementById("Output1").innerHTML=str4.sub();
*/

//Develop the fibonacci number using documnet.write()

/*
let n=parseFloat(prompt("Enter the value of n "));

if(n==0)
{
    document.write(0);
}
else if(n==1)
{
    document.write(1);
}
else
{
    document.write(0+" ");   
    document.write(1+" ");
}
let fib1=0;
let fib2=1;
for(i=2;i<=n;i++)
{
    fib3=fib1+fib2;
    document.write(fib3+" ");
    fib1=fib2;
    fib2=fib3;
}
*/

//Square of a given number
/*
let n=parseFloat(prompt("Enter the value :"));
for (i=1;i<=n;i++)
{
    window.alert(i**2);
}
*/

//Area of triangle
/*
let a1=5;
let a2=6;
let a3=7;
let s=(a1+a2+a3)/2;

let s1=Math.sqrt(s*(s-a1)*(s-a2)*(s-a3));
document.write("The area of trinagle when three sides are given is :"+s1);
*/

//calculate the income of a person
// Adding an event listener to the 'Calculate' button
/*
document.getElementById("calculateBtn").addEventListener("click", function() 
{
    // Read the input value and parse it as a floating-point number
    let s1 = parseFloat(document.getElementById("num").value);
    
    let com; // Variable to store the commission
    // Calculate commission based on the salary range
    if (s1 >= 1000 && s1 <= 5000) {
        com = (s1 / 100) * 10; // 10% commission
    } else if (s1 >= 5001 && s1 <= 10000) {
        com = (s1 / 100) * 15; // 15% commission
    } else {
        com = (s1 / 100) * 20; // 20% commission
    }
    //document.write(com);
    // Calculate the total salary with the commission
    let SubmitEvent = s1 + com;

    // Display the result in the 'Commission' span
    document.getElementById("Commission").textContent = SubmitEvent;
});
*/

//
/*
function count(){
    let h2sum=document.getElementById("h2").length;
    let h3sum=document.getElementById("h3").length;
    document.getElementById("result").innerHTML="Heading 2 sum is "+h2sum+"Heading 3 sum is "+h3sum
}
*/
------------------------------------------------------
/*    HTML CODE
    <script>
        function MoveToWindow()
        {
            window.resizeBy(100,200);
            console.log("resize By");
        }
        function MoveByWindow()
        {
            window.resizeTo(-100,-50);
            console.log("resize To");
        }
    </script>
*/
// FOR moveTo and moveBy function
    /*
<body>
    <script src="e1.js"></script>
    <button onclick="MoveToWindow()">MoveTo</button>
    <button onclick="MoveByWindow()">MoveBy</button>

    <script>
        let myWindow;
        function MoveToWindow()
        {
            myWindow = window.open("", "", "width=100, height=100");
        }
        function MoveByWindow()
        {
            myWindow.resizeBy(250,250);

        }
    </script>
</body>
*/
//TO CHANGE THE TEXT COLOR IN HTML
/*
<body>
    <p id="ID1">Change the color of paragraph</p>
    <button onclick="changeColor()">Change Color</button>
    <script>
        function changeColor()
        {
            document.getElementById("ID1").style.color="blue";
        }
    </script>
</body>
*/
//
/*

*/
//
