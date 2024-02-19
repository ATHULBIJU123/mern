function findUser(id) {

    let users = [
        {
            id : 1,
            name : "John",
            email : "john@gmail.com"
        },

        {
            id : 2,
            name : "Jane",
            email : "jane@gmail.com"
        },

        {
            id : 3,
            name : "Mike",
            email : "mike@gmail.com"
        }

    ];

    let user = users.find((e) => e.id === id);
    return user;
}

let user = findUser(1);
console.log("User ;",user);


function findUser1(id) {

    let users = [
        {
            id : 1,
            name : "John",
            email : "john@gmail.com"
        },

        {
            id : 2,
            name : "Jane",
            email : "jane@gmail.com"
        },

        {
            id : 3,
            name : "Mike",
            email : "mike@gmail.com"
        }

    ];

    setTimeout(()=> {
        let user = users.find ((e) => e.id === id);
        return user;
    },1000)
}
let user1 = findUser1(1);
console.log("User1 ;",user1);