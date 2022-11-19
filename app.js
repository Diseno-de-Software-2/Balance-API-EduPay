const express = require('express')
const app = express()
const axios = require('axios')
const HOST = 'localhost' // Change to actual host
const cors = require('cors')
const morgan = require('morgan')
var portfinder = require('portfinder');
portfinder.setBasePort(3200);
portfinder.setHighestPort(3249);
var setTerminalTitle = require('set-terminal-title');
setTerminalTitle('Balance service', { verbose: true });
var PORT;

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// consultar credito de tarjeta
app.get('/credito-tarjeta-:numero', (req, res) => {
    // send request to API-Bank
    const { numero } = req.params
    const url = `http://localhost:5000/tarjeta-${numero}`
    axios.get(url)

        .then(response => {
            console.log(response.data)
            if (response.data == 'Consultas deshabilitadas') {
                return res.status(503).json({ message: 'consultas deshabilitadas por parte del banco', service: 'Consultas bancarias' })
            } else {
                const { credito } = response.data[0]
                res.json({ credito })
            }
        })
        .catch(error => {
            console.log(error)
        })
})

//consultar saldo de cuenta
app.get('/saldo-cuenta-:numero', (req, res) => {
    // send request to API-Bank
    const { numero } = req.params
    const url = `http://localhost:5000/cuenta-${numero}`
    axios.get(url)
        .then(response => {
            if (response.data == "Consultas deshabilitadas") {
                return res.status(503).json({ message: 'consultas deshabilitadas por parte del banco', service: 'Consultas bancarias' })
            } else {
                const { saldo } = response.data[0]
                res.json({ saldo })
            }
        })
        .catch(error => {
            console.log(error)
        })
})

portfinder.getPort(function (err, port) {
    PORT = port;
    app.listen(PORT, async () => {
        const response = await axios({
            method: 'post',
            url: `http://localhost:3000/register`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                apiName: "balance",
                protocol: "http",
                host: HOST,
                port: PORT,
            }
        })
        await axios.post('http://localhost:3000/switch/balance', {
            "url": "http://localhost:" + PORT,
            "enabled": true
        })
        console.log(response.data)
        console.log(`Query server listening on port ${PORT}`)
    })
})
