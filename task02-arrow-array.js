const friends = ['asif', 'fahad', 'enan', 'rasik', 'susmita', 'tanzina', 'samiha', 'fardina', 'salman'];
// console.log(friends[2].length);
// const friendsList=friends=>{
const evenFriend = [];
for (let i = 0; i < friends.length; i++) {

    // console.log(friends[i]);
    const myfriends = friends[i];
    // console.log(myfriends.length);


    if (myfriends.length % 2 === 0) {

        evenFriend.push(myfriends);

    }


}
console.log(evenFriend);
return evenFriend;
// }
// friendsList();
