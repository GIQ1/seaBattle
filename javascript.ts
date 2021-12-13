double eps = 1.0;
double eps2 = eps * 0.5;
double eps21 = eps2 + 1.0;
 while( eps21 > 1.0 ){
 eps = eps2;
 eps2 = eps * 0.5;
 eps21 = eps2 + 1.0;
 }

console.log("РЕЗУЛЬТАТ");
console.log("Машинный эпсилон - " + eps2);
console.log("Машинная бесконечность - " + (10/0));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log("Потеря точности - " + (0.4-0.1));

while(true){}