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
const myObject = {
  firstName: "Király",
  lastName: "Tamás",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}