console.log(44);

function showMessage(message: string):void {
  console.log(message);
}
showMessage("Hello")


function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc);



function customError(): never {
  throw new Error('Error');
}
console.log(customError);
