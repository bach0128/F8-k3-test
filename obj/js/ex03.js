var a = {
    name: 'Xuan Bach',
    email: 'xuan@gmail.com',
};

var b = {
    teacher: 'Hoang An',
    salary: 5000000,
};

for (var key in b) {
    a[key] = b[key];
}

console.log(a);

var query = {
    name: "Hoang An",
    keyword: "Fullstack",
    category: 1,
}

// Chuyen doi obj thanh query string

Object.keys(query).forEach(function(key) {
    a[key] = query[key];
});

console.log(query);

// [[a: 1, b: 2], [a: 3, b:4]]
var queryString = Object.entries(query).map(function(array) {
    console.log(array);
    return array.join('=')
}).join('&').replaceAll(' ', '+')

console.log(queryString);

// Object.assign(target, source)
// var result = Object.assign(a, b);

// object.create(null) : tao obj ko co prototype

var c = Object.create(null)

// const myReference3 = JSON.parse(JSON.stringify(myObject));
// const myReference = {
//   ...myObject,
// };
// const myReference1 = myObject.slice(0);

// Toán tử optional chaining (?.)
console.log(a.getName?.())

var test1 = [
    "Item 1", "Item 2", "Item 3", "Item 4"
]

var result = test1.map(function(user) {
    return `<h3> ${user} </h3>`
})

Array.prototype.map2 = function(callback) {
    var array = this;
    var newArray = [];
    if (array.length) {
        for (var index = 0; index < array.length; index++) {
            var value = array[index];
            var result = callback(value, index);
            newArray[newArray.length] = result;
        }
    }
    return newArray;
}

var result = test1.map2(function(user, index) {
    return `<h3> ${index} - ${user} </h3>`
})

console.log(result)