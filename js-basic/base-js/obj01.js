var user = {
    name: 'Bach Tran',
    email: 'bach@gmail.com',
    age: 25,
    getName: function() {
        return 'Tran Xuan Bach';
    }
}

// add
user.country = 'United States';
user['address'] = 'California';

// sua gia tri cua key trong object
user.email = 'tranxuanbach98@gmail.com';

// xoa 
delete user.age;

// lay danh sanh key 
for (var key in user) {
    console.log(user[key]);
}

console.log(user);

var a = {};

if ( typeof a === 'object' && !Array.isArray(a) && a !== null) {
    console.log("la obj")
} else {
    console.log("khong la obj")
}

var user10 = {
    name: 'Xuan Bach',
    email: 'tranxuanbach99@gmail.com',
    jobs: {
        name: 'Hoc vien',
        salary: '-20 000 000',
        currency: 'vnd',
        per: 'month'
    },
}