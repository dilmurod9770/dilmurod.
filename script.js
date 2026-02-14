var text = prompt("So'z yozin");


var harf = prompt(" harf yozin");

var count = 0;


for (var i = 0; i < text.length; i++) {
  if (text[i] == harf) {
    count++;
  }
}

console.log(alert(`${text} harfi ${count} ta`));
console.log( $(text) `suzida`, $(harf) `ta bor`);