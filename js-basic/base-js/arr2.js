
var users = ["an", "tam", "binh", "mai"];

console.log(users.concat(["quan", "tung"], ["an"]))


console.log(users.join(":"))

var count = users.push("cao", "chung")

console.log(count)

console.log(users.unshift())

console.log(users.splice(0, 2, "a", "b"))

console.log(users.reverse())





var fullName =  "Tran Xuan Bach"
fullName = fullName.split(" ");
console.log(fullName.pop())

var customers = [
    'Nguyen Duong',
    'Duong Duc Hiep',
    'Tran Xuan Bach',
    'Nguyen Van Khoa'
]
var getFirstName = function(fullName) {
    return  fullName.split(" ").slice(-1).join();
}

customers.sort(function (a, b) {
    if (getFirstName(a) < getFirstName(b)) {
        return -1;
    }
})

console.log(customers)





