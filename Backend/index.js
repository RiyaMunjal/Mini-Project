import express from "express"
const app=express();


app.get("/api/jokes", (req, res)=>{
    const jokes=[{
        "id": 1,
        "name":"First Joke",
        "description":"this is a first Joke"

    },
    {
        "id": 2,
        "name":"Second Joke",
        "description":"this is a second Joke"

    },
    {
        "id": 3,
        "name":"Third Joke",
        "description":"this is a third Joke"

    },
]
    res.send(jokes);

})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on the Port Number ${process.env.PORT}`)

})