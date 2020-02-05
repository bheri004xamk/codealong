const restify = require("restify");
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer();

const portti = process.env.PORT || 3000;

const tehtavat = require("./models/tehtavat");
 
const cors = corsMiddleware({
  origins: ['*']
});

server.pre(cors.preflight)
server.use(cors.actual)

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.del("/api/tehtavat/:id", (req, res, next) => {

    tehtavat.poista(req.params.id, (err) => {

        tehtavat.haeKaikki((err, rows) => {

            if (err) {

                res.json(401, err);

            } else {

                res.json(rows);

            }

            return next();
        });

    });

});

server.put("/api/tehtavat/:id", (req, res, next) => {

    tehtavat.muokkaa(req.params.id, req.body, (err) => {

        tehtavat.haeKaikki((err, rows) => {

            if (err) {

                res.json(401, err);

            } else {

                res.json(rows);

            }
           

            return next();
        });

    });

});

server.post("/api/tehtavat", (req, res, next) => {

    console.log("body", req.body);

    tehtavat.lisaaUusi(req.body, (err) => {

        tehtavat.haeKaikki((err, rows) => {

            if (err) {

                res.json(401, err);

            } else {

                res.json(rows);

            }

            return next();

        });

    });

});


server.get("/api/tehtavat", (req, res, next) => {

    tehtavat.haeKaikki((err, rows) => {

        if (err) {

            res.json(401, err);

        } else {

            res.json(rows);

        }

        return next();

    });

});


server.listen(portti, () => {

    console.warn(`Palvelin käynnistyi porttiin ${portti}`);

});