 //My api key
 var apikey = {
    key: '27388895-79b7-4374-87b8-d93f8b38de9c'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var info = "";
    // Get 10 coins and symbols 
    for(let i = 0; i < 10; i++){



    //Show API information

       info = info + `
      
        <div class="media">
            <img src="././img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
            <h4 class="mt-4">${api.data[i].name}</h4>
            <p><b>Creation Data: </b> ${api.data[i].first_historical_data}</p>
            <p><b> Currency Code: </b> ${api.data[i].symbol}</p>
            <hr color="grey">
            </div>
        </div>
   
        `;

        document.getElementById("coins").innerHTML = info;
        
    }
})
.catch((error) => {
    console.error(error.message);
});