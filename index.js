const express = require('express')
const cors = require('cors')




const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000
const user = [
    { id: 0, name: 'abir hassan', email: 'abirk2day.com' },
    { id: 1, name: 'kabirl', email: 'abirk2day.com' },

]
app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResults = user.filter(person => person.name.toLocaleLowerCase().includes(search))
        res.send(searchResults)

    }


})

app.get('/users', (req, res) => {
    res.send(user)



})

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.post("/person", (req, res) => {
    const newUser = req.body
    newUser.id = newUser.length;
    user.push(newUser);

    res.json(newUser)
})

app.listen(port, () => {
    console.log("listening on port ", port)
})