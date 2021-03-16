const APIController = (function(){
    const clienteId = 'c75b0a3368df44348485081611e93efc';
    const  clienteSegredo = '098f477792c241fcb56f4db434417fd9';

    const _getToken = async ()=>{
        const resultado = await fetch('https://accounts.spotify.com/api/token',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            }
        })
    }

})