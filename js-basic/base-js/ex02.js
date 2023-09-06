// switch case 


var action = '111';

// switch (action) {
//     case 'add': 
//     console.log('add'); 
//     break;

//     case 'remove': 
//     console.log('remove'); 
//     break;

//     case 'update': 
//     console.log('update'); 
//     break;

//     default: 
//     console.log('unknown action'); 
//     break; 
// }

if (action === 'add' || action === 'create' || action === 'insert') {
    console.log('Them');
} else if (
    action === 'edit' || action === 'update'
) {
    console.log('Sua');
} else if (
    action === 'delete' || action === 'remove' || action === 'destroy'
) {
    console.log('Xoa');
} else {
    console.log('Danh sach');
}

var month = 10;

if (month % 1 === 0 && month >= 1 && month <= 12) {
    var days;
    month = +month; 
    switch (month) {
        case month = 2:
            days = 29;
        break;

        case 4: 
        case 6: 
        case 9:
        case 11:
            days = 30;
            break;

        default: 
            days = 31;
            break;
    }
    console.log(`Thang co ${days} ngay`)
} else {
    console.log('Thang khong hop le');
}
