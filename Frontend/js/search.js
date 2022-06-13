

butt.onclick = function() {
    
    loadWeathers();
    let popup = document.getElementById('parentsearch'),
        // popupToggle = document.getElementById('butt'),
        popupClose = document.querySelector('.clouse');
        popup.style.display="block";
        // popupToggle.onclick = function() {
        //     popup.style.display="block";
        // }

        popupClose.onclick = function() {
            popup.style.display="none";
        }

        window.onclick = function(e) {
            if(e.target == popup) {
                popup.style.display="none";
            }
        }
};


async function loadWeathers(e) {
    // weatherBlock.innerHTML =`
    // <div class="weather__loading">
    //     <img src="images/5.gif" alt="loading...">
    // </div>`;
    var val = document.getElementById('elem1').value;
    var el = `http://localhost:8080/cars/search?number=${val}`;
    console.log(el);
    const server = el;
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();
    if (response.ok) {
        getWeathers(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.massege;
    }

}
function getWeathers(data) {
    console.log(data);
    
    
        // let div = document.createElement('div');
        let parentinfo = document.querySelector('#parentsearchs');
        // div.className = `car__search car__search-${data.number}`;
        // div.innerHTML = `<p>Номерной знак: <span>${data.number}</span> ;</p> <p>Марка авто:  <span>${data.brand}</span>;<p>Модель авто: <span>${data.model}</span>;<p>Цвет: <span>${data.color}</span>;</p><p>Цена: <span>${data.rate}</span>;</p> `;

        // parentinfo.innerHTML(div);
        const template = `
        
        <div class="car__search">
        <p>Марка авто: <span>${data.number}</span>;</p>
        <p>Модель авто: <span>${data.brand}</span>;</p>
        <p>Номерной знак:<span> ${data.model}</span>;</p>
        <p>Цвет: <span>${data.color}</span>;</p>
        <p>Цена: <span>${data.rate}</span>;</p>
        <a href="update.html"    onclick="jsFunction(${data.id})">Змінити</a>
        </div>
        `;
        
        
    //     console.log(data);
        
    //     // header.innerHTML = template;
    parentinfo.innerHTML = template;
   
       
}
 
