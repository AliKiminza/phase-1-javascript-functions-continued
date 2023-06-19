// // code your solution here
// let activity;


// function saturdayFun(activity = 'roller-skate'){
//     return `This saturday, I want to ${activity}!`;
// }
// console.log ( saturdayFun(activity))
//let bathe;
//let skate;
// function saturdayFun(skate) {
//     return 'This Saturday, I want to roller-skate!'

// }
//console.log(saturdayFun(skate));
function saturdayFun(bathe = 'roller-skate') {
    return `This Saturday, I want to ${bathe}!`
}
//console.log(saturdayFun(bathe));
let office;
function mondayWork(office = 'go to the office') {
    return `This Monday, I will ${office}.`
}
// function mondayWork(home) {
//     return 'This Monday, I will work from home.'
// }
function wrapAdjective(asterix = "*") {
    return function (adjective="special"){
        return `You are ${asterix}${adjective}${asterix}!`;
    }
    console.log(wrapAdjective(asterix));
    
}