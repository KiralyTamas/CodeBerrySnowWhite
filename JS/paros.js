function oddEven(num) {
  let totalNumber = num;
  for (let numbers = 1; numbers <= totalNumber; numbers++) {
    if ((numbers % 3 + numbers % 5) == 0) {
      console.log(numbers + ' egér')
    } else if (numbers % 3 == 0) {
      console.log(numbers + ' kutya')
    } else if (numbers % 5 == 0) {
      console.log(numbers + ' cica')
    } else {
      console.log(numbers + ' Egyikkel sem osztható')
    }
  }
}
let myObject = {
  firstName1: "Király",
  lastName1: "Tamás",
  firstName2: "Huszti",
  lastName2: "László",
  fullName: function () {
    if (document.getElementById("testWrite1").innerHTML, document.getElementById("testWrite2").innerHTML == "") {
      document.getElementById("testWrite1").innerHTML = this.firstName1 + " " + this.lastName1;
      document.getElementById("testWrite2").innerHTML = this.firstName2 + " " + this.lastName2;
    } else {
      document.getElementById("testWrite1").innerHTML = "Már van Név!!";
      document.getElementById("testWrite2").innerHTML = "Már van Név!!";
    }
  }
}