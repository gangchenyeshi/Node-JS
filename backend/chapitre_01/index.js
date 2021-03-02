const { request } = require("express");
const express = require("express");
const port = 8000;

const app = express();
app.listen(8000, () => {
    // console.log("Server Start");

})


const authorList = [
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


app.get("/", (request, response) => {
    response.send("Authors API")
})

// // EXERCISE -1

app.get("/authors/:id", (request, response) => {
    response.send(authorList[request.params.id].authors)
    // first One is more DYNAMIC
    
    // OR
// SWITCH AND IF Is not DYNAMIC For if you have a many or 1000 condition

//     switch(request.params.id) {
//         case  "1" : //why not 1 because In URL all are string not a number that ahy ir 
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

})

    
// //EXERCISE -2
const books = [
    ["Beowulf"],
    ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
    ["Oliver Twist", "A Christmas Carol"],
    ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
]
app.get("/authors/:id/books/", (request, response) => { 
    if(request.params.id > books.length ){
        response.send("The author with the ID 12133 does not exist")
    }else{
        response.send(books[request.params.id])
    }

})

// //EXERCISE -3
// app.get("*", (request, response) => {
//     response.send("ERROR 404 ")
// })

//EXERCISE -4

app.use(express.json());



// console.log(authorList[1]); 
// console.log(authorList[1].authors); 
// console.log(authorList[1].books); 

//EXERCISE -4
app.get("/json/authors/:id", (req, res) => {
    console.log(req.params.id);
    if(Number.isInteger(parseInt(req.params.id))) {
        if(parseInt(req.params.id) < authorList.length) {
            res.send(authorList[req.params.id -1].authors)
        } else {
            res.send(`The author with ID ${req.params.id} does not exist`)
        }    
    } else {
        res.send("l'id doit etre un entier")
    }
}) ;

app.get("/json/authors/:id/books", (req, res) => {
    if(Number.isInteger(parseInt(res.params.id))) {
        if(parseInt(req.params.id < authorList.length)) {
            res.send(authorList[req.params.id -1].books)
        }else {
            res.send(`The author with ID ${req.params.id} does not exist`)
        }
    } else {
        res.send("l'id doit etre un entier")
    }
    
});