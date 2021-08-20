import express, { request, response } from 'express'

const app = express();

app.post("/users", (request, response) => {
    return response.json({ message: "Hello World - NLW4"})
});

app.listen(3333, () => console.log("server is running!"));