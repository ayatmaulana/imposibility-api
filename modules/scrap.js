const axios         = require( 'axios' ) 
const cheerio       = require( 'cheerio' )
const config        = require( '../config/config.js' )

module.exports      = async ( data ) => {
    let param       = {
        params  :   {
            k: data.k,
            o: data.o,
            q: data.q,
            subject: "impossibility.org+contact+form",
            name: "",
            email: "",
            message: ""
        }
    }

   try{
        let getData = await axios.get( config.url + '/search', param )
        let domain  = getData.data

        let extrack = domain.match(/\".*?\"/g).map( (a) => {
            return a.replace(/"/, '' ).replace(/"/, '' )
                    
        } )

        return extrack
        
        
   } catch ( err )
   {
        throw new err
   }

}
