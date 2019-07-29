document.getElementById('search-button').addEventListener("click", getImg);

   
function getImg(){
    const srchQuery = document.querySelector('#search-input').value;
    var url = `https://pixabay.com/api/?key=6600429-1a818eb17200a81f7fa600b1f&image_type=photo&q=${srchQuery}`;  
    fetch(url).
    then((response) => {
            response.json().
            then((data)=>{
             console.log(response);
                console.log(data);
    
    for (var i = 0; i < data.hits.length; i++){
      function insertimage(){
        var element = document.createElement("img");
        element.src = data.hits[i].previewURL; //webformatURL лучше ведь смотрятся?
        document.getElementById('search-results').appendChild(element);
            }
    //document.getElementById('search-results').innerHTML = data.hits[i].webformatURL; 
                insertimage(); 
                }
                })
            }).catch((error)=>{
                console.log(error);
        });
    }

    
    function swipeImg() {
        var elem = document.getElementById('search-results');
        elem.innerHTML = '';
    }
    
    

    /*
async function getImg(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
*/ //асинихронно типа



