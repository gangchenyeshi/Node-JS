const { request } = require("express");
const express = require("express");

const app = express();
app.listen(8000, () => {
    // console.log("Server Start");

})

// app.get("/", (request, response) => {
//     response.send("Authors API")
// })


// // EXERCISE -1
// app.get("/authors/:id", (request, response) => {
//     switch(request.params.id) {
//         case  "1" : 
//         response.send("Lawrence Nowell, UK");
//         break;
//         case "2" : 
//         response.send("William Shakespeare, UK");
//         break;
//         case "3" : 
//         response.send("Charles Dickens, US");
//         break;
//         case "4" : 
//         response.send("Oscar Wilde, UK");
//         break;
//         default : 
//         response.send(`The author with the ID ${request.params.id} does not exist`) //Exercise-3
//     }
//     console.log(request.params)
//     // if(request.params.id == 1) {
//     //     response.send("Lawrence Nowell, UK")
//     // }else if(request.params.id == 2) {
//     //     response.send("William Shakespeare, UK")
//     // }else if(request.params.id == 3) {
//     //     response.send("Charles Dickens, US")
//     // }else if(request.params.id == 4) {
//     //     response.send("Oscar Wilde, UK")
//     // }

// })

// //EXERCISE -2
// app.get("/authors/:id/books/", (request, response) => { 
//     if(request.params.id == "1") {
//         response.send("Beowulf");
//     }else if(request.params.id == "2") {
//         response.send("Hamlet, Othello, Romeo and Juliet, MacBeth");
//     }else if(request.params.id == "3") {
//         response.send("Oliver Twist, A Christmas Carol");
//     }else if(request.params.id == "4"){
//         response.send("The Picture of Dorian Gray, The Importance of Being Earnest");
//     }else{
//         response.send(`The author with the ID ${request.params.id} does not exist`)
//     }
// })

// //EXERCISE -3
// app.get("/cars/", (request, response) => {
//     response.send("ERROR")
// })

//EXERCISE -4

app.use(express.json());

const listOfBooks = [
    {
        authors: {
            name: "Lawrence Nowell",
            nationality: "UK"
        },
        books: ["Beowulf"]
    },
    {
        authors: {
            name: "William Shakespear",
            nationality: "UK"
        },
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
    },
    {
        authors: {
            name: " Charles Dickens",
            nationality: "US"
        },
        books: ["Oliver Twist", "A Christmas Carol"],
    },
    {
        authors: {
            name: "Oscar Wilde",
            nationality: "UK"
        },
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
    }
];

// console.log(listOfBooks[1]); 

app.get("/json/authors/:id", (request, response) => {
    if (request.params.id == "1") {
        response.send(listOfBooks[0].authors)
    } else if (request.params.id == "2") {
        response.send(listOfBooks[2].authors)
    } else if (request.params.id == "3") {
        response.send(listOfBooks[2].authors)
    } else if (request.params.id == "4") {
        response.send(listOfBooks[3].authors)
    }
})

app.get("/json/authors/:id/books", (request, response) => {
    if (request.params.id == "1") {
        response.send(listOfBooks[0].books)
    } else if (request.params.id == "2") {
        response.send(listOfBooks[2].books)
    } else if (request.params.id == "3") {
        response.send(listOfBooks[2].books)
    } else if (request.params.id == "4") {
        response.send(listOfBooks[3].books)
    }
})