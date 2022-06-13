"use strict"

// Блок з погодою
const weatherBlock = document.querySelector('.table'); 

async function loadWeather(e) {
    // weatherBlock.innerHTML =`
    // <div class="weather__loading">
    //     <img src="images/5.gif" alt="loading...">
    // </div>`;

    const server = 'http://localhost:8080/cars/'
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();
    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.massege;
    }

}

function getWeather(data) {
    // console.log(data);
    if (data.length == 0) {
      let paren = document.querySelector('#parent');
      paren.innerHTML = ('');
      let div = document.createElement('div');
      let parent = document.querySelector('#parent');
      div.className = `patients__info`;
      div.innerHTML = `<div>База данних порожня</div>`;
      parent.append(div);
  } else {
      let paren = document.querySelector('#parent');
      paren.innerHTML = ('');
      
  for (let i = 0; i < data.length; i++) { // выведет 0, затем 1, затем 2
      

      let tbody = document.createElement('tr');
      let parent = document.querySelector('#parent');
    
      tbody.innerHTML = `

                 
                      <td>${data[i].brand}</td>
                      <td>${data[i].model}</td>
                      <td>${data[i].number}</td>
                      <td>${data[i].color}</td>
                      <td>${data[i].rate}</td>
                      <td>  <a href="update.html"    onclick="jsFunction(${data[i].id})">Змінити</a>  </td>
                
              
      `;
      parent.append(tbody);

  }
  
 
  }

    let popup = document.getElementById('parentrest'),
    popupToggle = document.getElementById('myBtn'),
    popupClose = document.querySelector('.clouses');

    popupToggle.onclick = function() {
        popup.style.display="block";
        // let div = document.createElement('div');
        // let parent = document.querySelector('#parentrest');
        
        
    }

    popupClose.onclick = function() {
        popup.style.display="none";
    }

    window.onclick = function(e) {
        if(e.target == popup) {
            popup.style.display="none";
        }
    }
    
 
}

if (weatherBlock) {
    loadWeather();
}
    

function jsFunction(data) {
                        
  localStorage.setItem('test', data);
}

