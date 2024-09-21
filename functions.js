function even (x)
{
  return x % 2 == 0;
  
}
const value = even(-8)
const Value = even(27)
console.log(Value)
console.log(value)

//===============================================================================================================================

function average (x, y)
{
  return (x + y ) / 2;
}

const averageResults = average(17,8)
console.log(averageResults)

//==============================================================================================================================

function divide (x,y)
{
  return y % x === 0;

}

const division = divide(4, 8)
console.log(division)

//==============================================================================================================================

/* Returns whether a given year is a leap year, according to the rules of the Gregorian calendar. A year is a leap year if it is:   
      ° divisible by 4 but not 100 
      ° or else is divisible by 400 */

function isLeapYear (year)
{
  return divide(4, year) && !divide(100, year) || divide(400, year);
}

const leapYear = isLeapYear(1996)
console.log(leapYear)

//============================================================================================================================

/*Write a function to convert Celsius to Fahrenheit*/

function calcFahrenheit(celcius)
{
  const Fahrenheit = (celcius * 9 / 5) + 32;
  return Fahrenheit
}

const fahrenheitResults = calcFahrenheit(13)
console.log(`The temperature is ${fahrenheitResults}F`)

//=================================================================================================================================

/*Write a function to convert Fahrenheit to Celsius */

function calcCelsius (fahrenheit)
{
  const Celsius = (fahrenheit -32)* 5 / 9;
  return Celsius
}

const celsiusResults = calcCelsius(59)
console.log(`The temperature is: ${celsiusResults}°C`)

//===============================================================================================================================

/*Write a function to find the area of a given Rectangle*/

function rectangleArea(length, width)
{
  area = length * width
  return area;
}

const areaResults = rectangleArea(10,10)
console.log(`The area of a rectangle is:${areaResults}cm²`)

//================================================================================================================================

/*Write a function to reverse a number*/

function reverseNumber (number)
{
  if (number >= 0 && number <= 9)
    return number;

  let reverseNum = 0;
  while(number != 0)
  {
    reverseNum = reverseNum * 10 + (number % 10)
    number = Math.floor(number / 10);
  }

  return reverseNum;
}

const reversal = reverseNumber()
console.log(reversal)
