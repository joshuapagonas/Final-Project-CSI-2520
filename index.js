const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs"); 
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Listening On PORT: ${PORT}`)
});