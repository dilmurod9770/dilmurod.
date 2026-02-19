var input = prompt("Sonni yozen");
var data = input.split(" ");
var a = Number(data[0]);
var amal = data[1];
var b = Number(data[2]);
var son;

switch (amal) {
  case "+":
   son = a + b;
    break;
  case "-":
    son = a - b;
    break;
  case "*":
    son = a * b;
    break;
  case "/":
    son = a / b;
    break;
  default:
    son = "Noto`g`ri amal";
}

alert(son);