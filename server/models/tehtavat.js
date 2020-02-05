const mysql = require("mysql");

let asetukset = {
    host     : "localhost",
    user     : "root",
    password : "",
    database : "tehtavalista"
};

const yhteys = mysql.createConnection(asetukset);

yhteys.connect((err) => {
    if(!err) {
        console.log("Tietokantayhteys avattu");    
    } else {
        throw `Virhe yhdistettäessä tietokantaan: ${process.env.MYSQLCONNSTR_localdb} ${err}`;    
    }
});

module.exports = {
    
    haeKaikki : (callback) => {

        yhteys.query("SELECT * FROM tehtavat", (err, rows) => {

            callback(err, rows);

        });

    }
    ,
    lisaaUusi : (tehtavatiedot, callback) => {


        yhteys.query("INSERT INTO tehtavat (nimi, ohje, suoritettu) VALUES (?, ?, ?)", [tehtavatiedot.nimi, tehtavatiedot.ohje, tehtavatiedot.suoritettu], (err, rows) => {

            callback(err, rows);

        });
    }
    ,
    muokkaa : (id, tehtavatiedot, callback) => {

        let tiedot = {
                        nimi : tehtavatiedot.nimi,
                        ohje : tehtavatiedot.ohje,
                        suoritettu : tehtavatiedot.suoritettu
                     };

        yhteys.query("UPDATE tehtavat SET ? WHERE id = ?", [tiedot, Number(id)], (err, rows) => {

            callback(err, rows);

        });

    }    
    ,
    poista : (id, callback) => {

        yhteys.query("DELETE FROM tehtavat WHERE id = ?", Number(id), (err, rows) => {

            callback(err, rows);

        });

    }     
};