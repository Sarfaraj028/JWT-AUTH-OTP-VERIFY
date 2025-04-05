import app from './app.js'
const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("Home Page")
})

app.listen(PORT, () =>{
    console.log("Server is listening on port ", PORT);
})