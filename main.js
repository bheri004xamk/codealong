const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer({ dest : "./public/uploads/" });

const fs = require("fs");

const portti = 3201;
const tiedostonimi = "./kuvat.json"; 

app.use(express.static("./public/"));

app.post("/lisaakuva/", upload.single("tiedosto"), (req, res) => {

    fs.readFile(tiedostonimi, (err, data) => {

        if (err) throw err;

        let kuvat = JSON.parse(data);

        let uusikuva = { 
                        "otsikko" : req.body.otsikko,
                        "tiedosto" : req.file.filename,
                        "aikaleima" : new Date().getTime() 
                        };

        kuvat.push(uusikuva);

        fs.writeFileSync(tiedostonimi, JSON.stringify(kuvat, null, 2));              

    });


    res.redirect("/");

});

app.get("/", (req, res) => {
  

    fs.readFile(tiedostonimi, (err, data) => {

        if (err) throw err;

        let kuvakorttiHTML = "";

        let kuvat = JSON.parse(data);
        
        kuvat.reverse();

        kuvat.forEach(kuva => {
            kuvakorttiHTML += `
                                <div class="col-md-2">
                                    <div class="card">
                                        <img class="card-img-top" src="uploads/${kuva.tiedosto}" alt="${kuva.otsikko}">
                                        <div class="card-body">
                                            <p class="card-text">${kuva.otsikko}</p>
                                            <p class="card-text"><small class="text-muted">${kuva.aikaleima}</small></p>
                                        </div>
                                        <div class="card-footer">
                                            <div class="row">
                                                <div class="col">
                                                    <i class="far fa-heart"></i>
                                                </div>
                                                <div class="col">
                                                    <i class="far fa-comments"></i>
                                                </div>
                                                <div class="col">
                                                    <i class="far fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
        });

        let sivu = `
            <!DOCTYPE html>
            <html lang="fi">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="css/bootstrap.min.css">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
                <link rel="stylesheet" href="css/style.css">
                <title>Xamk-imgur</title>
            </head>
            <body>

                <nav class="navbar navbar-light bg-light mb-3">
                    <a class="navbar-brand" href="/">
                    <img src="img/xamk.png" height="40" class="d-inline-block align-top" alt="">
                    </a>
                    <a href="lisaa.html" class="btn btn-success">Lisää uusi kuva</a>
                </nav>

                <div class="row">
                ${kuvakorttiHTML}
                </div>

            
            </body>
            </html>    
            `;

        res.send(sivu);

    });


    

});

app.listen(portti, () =>  {

   console.log(`Palvelin käynnistyi porttiin: ${portti}`); 

});