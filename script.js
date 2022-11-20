// function makeid(length) {
//     var result           = [];
//     var characters       = ['a','b','c','d'];
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//     console.log(result);
// }

// console.log(makeid(2));

function makeid(length) {
    var result           = [];
    var characters       = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(2));