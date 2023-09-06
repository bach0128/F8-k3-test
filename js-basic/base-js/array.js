
var users = ["a", "b", "c", "d", "e", "f"]
console.log(users)

if (Array.isArray(users)) {
    console.log("Day la mang")
    console.log(users.length)
} else {
    console.log("Day khong la mang")
}

users.push("g")

users[users.length] = "k"

console.log(users)

for (var i = 0; i < users.length; i++) {
    console.log(users[i])
}
for (var index in users) {
    console.log(users[index])
}

var indexDel = 1;
var results = [];
for (var index in users) {
    if (+indexDel == index) {
        continue;
    }
    results[results.length] = users[index]
}

var value = "Quy";
var newArr = [];

newArr[newArr.length] = value;
for (var index in users) {
    newArr[newArr.length] = users[index]
}

console.log(newArr)
