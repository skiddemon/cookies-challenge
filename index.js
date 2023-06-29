//Create an Express application that sets a cookie when routed to /login with their name. 
//If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".

import express, { application } from "express";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

const app = express();
const port = 8080
app.use(express.json())

app.get('/login', (req, res) => {
    const opts = {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'strict',
        path: '/hello',
    }

    res.cookie('username', 'SkidDemon', opts);
    res.cookie('Cookie with some json data' , {test: 'data', testy: 'data-ey'})
    res.send('Hello cookie monster!')
});

app.use(cookieParser())
app.get('/hello', (req, res) => {
    console.log(req.cookies.other_name)
    res.send(`Hello ${req.cookies.username}`)
})

app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)})