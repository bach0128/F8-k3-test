var user = {
    name: 'Xuan Bach',
    email: 'xuan@gmail.com',
    getName: function() {
        return this.name
    }
}

var Person = function() {
    this.name = 'Hoang An',
    this.email = 'hoangan.web@gmail.com',
    this.getName = function() {
        return this.name
    }
}

Person.prototype.message = "Hello, world!"

var person = new Person();
console.log(person);
console.log(person.message);

// kiểm tra obj thuộc hàm tạo nào 
console.log(person.constructor.name);

// xây dựng 1 hàm nội bộ từ hàm tạo 
var getMsg = function() {
    console.log('Xin chao F8')
}

Person.isPerson = function(variable) {
    return variable && variable.constructor.name === 'Person'
}

if (Person.isPerson(person)) {
    console.log("Đây là person")
} else {
    console.log("Không phải là person")
}