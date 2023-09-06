var user = {
    name: 'Xuan Bach',
    email: 'xuan@gmail.com',
}

var customer = {
    name: 'John',
    age: 20,
}

Object.prototype.combine = function (...args) {
    var current = this;
    
    if (args.length) {
        return args.map(function (key) {
            return current[key];
        })
    }
}

var result1 = user.combine("name", "email")

var result2 = customer.combine("name", "age")

console.log(result1, result2)