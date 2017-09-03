const scrap         = require('./modules/scrap')
const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get( '/domain', async (req, res) => {
    
    try{
        const urlParam       = req.query
       
        let getData          = await scrap({
            k: urlParam.k,
            o: urlParam.o,
            q: urlParam.q
        })
        
        res.header({
            'Content-Type': 'application/json'
        })
    
        res.send({
            status: 200,
            msg: 'Success',
            data: getData
        })

    } catch( err )
    {
        res.send( {
            status: 400,
            msg: 'Error',
            data: err
        }, 400 )
    }
    
} )


app.listen( 1945, () => {
    console.log( "listen from 1945" )
} )