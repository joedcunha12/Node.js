function ashu() {
  console.log(">>>>>>>>>>>>>>>>>>>>>first");
}

function ashu(num) {
  console.log(">>>>>>>>>>>>>>>>>>>>>second");
}

function ashu(num, num1) {
  console.log(">>>>>>>>>>>>>>>>>>>>>third");
}

function ashu(num, num1, num2) {
  if (num == undefined) {
    return;
  }
  console.log(">>>>>>>>>>>>>>>>>>>>>fourth", num, num1, num2);
}

ashu(10);
ashu(10, 1000);
ashu();
ashu(10, 500, 154, 1242);
