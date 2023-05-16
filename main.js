const apiKey = 'c27ad302c98b4570a77184211230305'

//http://api.weatherapi.com/v1/current.json?key=c27ad302c98b4570a77184211230305&q=Moscow&days=7
//https://api.weatherapi.com/v1/forecast.json?key=c27ad302c98b4570a77184211230305&q=Moscow&days=2


const button = document.querySelector('#button')
const input = document.querySelector('#input')
const serchField = document.querySelector('.search-field')

const weatherCard = document.querySelector('.weather-card')
const weatherBlock = document.querySelector('.weather-block')

const count = adviceData.conditions.length
const help = document.querySelector('.help')

const dom = {
    sections:{
        country: document.querySelector('#country'),
        city: document.querySelector('#city'),
        temperature: document.querySelector('#temperature'),
        feelsLike: document.querySelector('#feels-like'),
        visibility: document.querySelector('#visibility'),
        gust: document.querySelector('#gust'),
        condition: document.querySelector('#condition'),
        image: document.querySelector('#image')
    },
    advices:{
        advice: document.querySelector('#advice')
    }
}


document.addEventListener( 'keyup', event => {
    const city = input.value
    const daysUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`
    if( event.code === 'Enter' ){
        fetch(daysUrl).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            renderWeather(data)
            adviceRender(data)
            help.classList.add('desable')
        });
    };
});

button.onclick = () => {
    const city = input.value
    const daysUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`    
    fetch(daysUrl).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        renderWeather(data)
        adviceRender(data)
        help.classList.add('desable')
    });

}

function renderWeather(data){
    weatherBlock.classList.remove('desable')
    dom.sections.country.innerHTML = data.location.country
    dom.sections.city.innerHTML = data.location.name
    dom.sections.temperature.innerHTML = data.current.temp_c
    dom.sections.feelsLike.innerHTML = data.current.feelslike_c
    dom.sections.visibility.innerHTML = data.current.vis_km         //видимостьs           //ветер 
    dom.sections.gust.innerHTML = data.current.gust_kph                  //порыв ветра
    dom.sections.condition.innerHTML = data.current.condition.text
    dom.sections.image.src = `https:` + data.current.condition.icon
    // serchField.insertAdjacentHTML('afterend', html);					

}

// weatherCard.addEventListener('click', function(e){
//     description.classList.toggle('desable')
// });


function adviceRender (data){
    dom.advices.advice.innerHTML = ''
    for (let i = 0; i<count; i++){
        if (data.current.condition.text === adviceData.conditions[i].condition){
            dom.advices.advice.innerHTML = adviceData.conditions[i].advice
        }
    }
    if (data.current.vis_km < 10){
        dom.advices.advice.innerHTML += `<p class="dangerous">Visibility is poor on the roads.</p>`
    }
    if (data.current.gust_kph > 30){
        dom.advices.advice.innerHTML += `<p class="dangerous">The wind is dangerous, try not to drive fast on an open surface.</p>`
    }
    if (data.current.temp_c < 0){
        dom.advices.advice.innerHTML += `<p class="dangerous">The roads can be slippery.</p>`
    }
    if (data.current.temp_c > 30){
        dom.advices.advice.innerHTML += `<p class="dangerous">It's very hot, leave the car in the shade.</p>`
    }
    console.log(data.current.vis_km)
}


