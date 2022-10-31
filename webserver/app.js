const express = require('express');
const app = express();
const port = 3000;

//Servir contenido estatico

app.use(express.static('public'));

app.get('/elements', (req, res) =>{
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('/generic', (req, res) =>{
    res.sendFile(__dirname + '/public/generic.html');
  });

app.get('*', (req, res) =>{
   // res.send('404 | Page not found');
   res.sendFile(__dirname + '/public/404.html');
  });
  
  //app.listen(3000);
  app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
  });