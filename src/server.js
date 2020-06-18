const app = require("./app");

const PORT = process.env.PORT || '3333'

app.listen(PORT, (error) => {
    if (error){
        console.error(error)
    }else {
        console.log(`Server started on port ${PORT}`)
    }
});
