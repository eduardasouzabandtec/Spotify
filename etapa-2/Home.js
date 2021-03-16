
const express = require('express');
let app = express();
app.get('/',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Olá</h1>')
    console.log('URL',req.url);
    console.log('METHOD', req.method);
});




app.listen(3000,'127.0.0.1', ()=>{
    console.log('Server is running.');
});
