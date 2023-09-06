
var users = ['An', 'John', 'Smith','Chad', 'Annel', 'Chris']

users.forEach(function(user, index) {
    console.log(user, index)
})  

// var newArr = users.map(function(user, index) {
//     return `${user} ${index}`
// })

// var newArr2 = users.filter(function(user, index) {
//     if (user === 'An' || user === 'John') {
//         return 1;
//     }
// })

// console.log(newArr2);

var customers = [
    'Nguyen Duong',
    'Duong Duc Hiep',
    'Tran Xuan Bach',
    'Nguyen Van Khoa',
    'Ta Hoang An'
]

var keyword = 'an';

var checkKey = customers.filter(function(customer, index) {
    return customer.toLowerCase().includes(keyword.toLowerCase())
})

console.log(checkKey);

var users2 = [
    ['Hoang An', 'hoangan@gmail.com', 31],
    ['Nguyen Duong', 'nguyenduong@gmail.com', 19],
    ['Xuan Bach', 'hoangan@gmail.com', 25],
]

var key2 = 'nguyenduong@gmail.com'

var newArr3 = users2.map(function(user) {
        if (user[1] === key2) {
            user[2] += 2;
    }
    return user;
})

console.log(newArr3)

var arr4 = [1, 2, 3, 4, 5, 6]

// var  findMax = arr4.reduce(function(max, number) {
//     if (max < number) {
//         return max = number
//     }
// })

// console.log(findMax)


var arr5 = [2, 3, 4, 5]

var newArr6 = arr4.reduce(function(prev, number) {
    (arr5.includes(number)) ? prev : prev.push(number);
    return prev
}, [])

console.log(newArr6)

/**
 * [1,2,3,3,4] // lawpj
 * 
 * mangr mowis [1,2,3, 4]
*/

