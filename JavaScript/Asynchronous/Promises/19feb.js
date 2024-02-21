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

//20-02-2024
//Promises

function findUser2(id) {
    return new Promise ((resolve,reject) => {
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
            
            if (user) {
                resolve (user);
            }else {
                reject("User not found");
            }
        },1000);
    
    })
}

let user2 = findUser2(2);
console.log("User2 ;",user2);

user2
    .then((user) => {
        console.log("Reached then...");
        console.log("User : ",user)
            user.address = "myAddress";
            return user;
    })

    .then((user) => {
        console.log("User : ",user)
        user.pin = "1234567";
        return user;
    })

    .then((user) => {
        console.log("User : ",user)
    })

    .catch((error) => {
        console.log("Reached catch...")
        console.log("error :",error);
    })

    .finally(() => [
        console.log("Reached finally...")
    ])

console.log("\nAsynch")
//21-02-2024
    async function findUser(id) {
        return new Promise((resolve, reject) => {
            let users = [
                {
                    id: 1,
                    name: "John",
                    email: "john@gmail.com"
                },

                {
                    id: 2,
                    name: "Jane",
                    email: "jane@gmail.com"
                },

                {
                    id: 3,
                    name: "Mike",
                    email: "mike@gmail.com"
                }

            ];

            setTimeout(() => {
                let user = users.find((e) => e.id === id);

                if (user) {
                    resolve(user);
                } else {
                    reject("User not found");
                }
            }, 1000);

        })
    }

    async function getUser() {
        let user = await findUser(2);
        console.log("User :", user);
    }

    getUser();