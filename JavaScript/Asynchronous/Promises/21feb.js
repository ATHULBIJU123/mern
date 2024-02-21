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