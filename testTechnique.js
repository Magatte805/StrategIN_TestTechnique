/* 1. Write a function that returns the maximum of two numbers. */
let maximum  = max(8,2)
console.log(maximum)

function max(a, b) {
    return(a>b) ? a:b
  }

/* 2. Write a function called fozz_bezz that takes a number.
○ If the number is divisible by 3, it should return “Fozz”.
○ If it is divisible by 5, it should return “Bezz”.
○ If it is divisible by both 3 and 5, it should return “FozzBezz”.
○ Otherwise, it should return the same number.
*/

let number = fozz_bezz(20)
console.log(number);


function fozz_bezz(a){
  if (a % 3 === 0 && a % 5 === 0 ) {
    return "FozzBezz";
  }else if(a % 3 === 0){
    return "Fozz";
  }else if (a % 5 === 0){
    return "Bezz";
  }else{
    return a;
  }

}


/* 3. Write a function to check the speed of drivers. This function
should have one parameter: speed.
○ If speed is less than 80, it should print “Ok”.
○ Otherwise, for every 4km/h above the speed limit (80), it
should give the driver one demerit point and print the total
number of demerit points. For example, if the speed is 90, it
should print: “Points: 2”.
○ If the driver gets more than 12 points, the function should
print: “License suspended” 
*/
let Speed = checkSpeed(70)

 
function checkSpeed(speed) {
  const limit_speed = 80;
  const km_Per_demerit_point = 4;
  const demerit_max_points = 12;

  if (speed<= limit_speed) {
    console.log("Ok");
  } else {
    const demerit_points= Math.floor((speed - limit_speed) / km_Per_demerit_point);
    if (demerit_points > demerit_max_points) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demerit_points);
    }
  }
}

/* 4. Write a function called showNumbers that takes a parameter called
limit. It should print all the numbers between 0 and limit with a label
to identify the even and odd numbers. For example, if the limit is 3, it
should print:
○ 0 EVEN
○ 1 ODD
○ 2 EVEN
○ 3 ODD
*/

let limit = showNumbers(3)

function showNumbers(limit) {
  for(let i =0; i<=limit; i++){
    if (i % 2 === 0) {
      console.log(i + " EVEN");
    } else {
      console.log(i + " ODD");
  }
}
}


/* 5. Write a function that returns the sum of multiples of 3 and 5 between
0 and limit (parameter). For example, if limit is 20, it should return the
sum of 3, 5, 6, 9, 10, 12, 15, 18, 20
*/
let sum = sumMultiples(20)
console.log(sum)

function sumMultiples(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

/*  6. Write a function called show_stars(rows). If rows are 5, it should print
the following:
*/

let row = show_stars(5)

function show_stars(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}


/* 7. Write a function that prints all the prime numbers between 0 and limit
where limit is a parameter.
 */

let Limit = printPrimeNumber(20)

function printPrimeNumber(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
