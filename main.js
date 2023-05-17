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
const nextDay = document.querySelector('.next-day')
const prevDay = document.querySelector('.prev-day')

const cardsBlock = document.querySelector('.cards')
const typeOfDay = document.querySelector('#current-text')

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

            nextDay.onclick =() =>{
                renderNextDay(data)
                adviceNextRender(data)
            }

            prevDay.onclick = () =>{
                renderWeather(data)
                cardsBlock.style.margin = "0px 36px 0px 76px";
                nextDay.classList.remove('desable')
                prevDay.classList.add('desable')
                adviceRender(data)
            }
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

        nextDay.onclick =() =>{
            renderNextDay(data)
            adviceNextRender(data)
        }

        prevDay.onclick = () =>{
            renderWeather(data)
            cardsBlock.style.margin = "0px 36px 0px 76px";
            nextDay.classList.remove('desable')
            prevDay.classList.add('desable')
            adviceRender(data)
        }
    });

}

function renderWeather(data){
    weatherBlock.classList.remove('desable')
    typeOfDay.innerText = 'Current'
    dom.sections.country.innerHTML = data.location.country
    dom.sections.city.innerHTML = data.location.name
    dom.sections.temperature.innerHTML = Math.round(data.current.temp_c)
    dom.sections.feelsLike.innerHTML = Math.round(data.current.feelslike_c)
    document.querySelector('.text-feels-like').innerHTML = 'Feels like:'
    document.querySelector('.mesure-feels-like').innerHTML = '&degC'
    dom.sections.visibility.innerHTML = data.current.vis_km         //видимостьs           //ветер 
    dom.sections.gust.innerHTML = data.current.gust_kph                  //порыв ветра
    dom.sections.condition.innerHTML = data.current.condition.text
    dom.sections.image.src = `https:` + data.current.condition.icon
    // serchField.insertAdjacentHTML('afterend', html);					

}

function renderNextDay(data){
    nextDay.classList.add('desable')
    prevDay.classList.remove('desable')
    typeOfDay.innerText = 'Tomorrow'
    dom.sections.temperature.innerHTML = Math.round(data.forecast.forecastday[1].day.avgtemp_c)
    document.querySelector('.text-feels-like').innerHTML = 'Chance of rain:'
    document.querySelector('.mesure-feels-like').innerHTML = '%'
    dom.sections.feelsLike.innerHTML = data.forecast.forecastday[1].day.daily_chance_of_rain
    dom.sections.visibility.innerHTML = data.forecast.forecastday[1].day.avgvis_km    
    dom.sections.gust.innerHTML = data.forecast.forecastday[1].day.maxwind_kph              
    dom.sections.condition.innerHTML = data.forecast.forecastday[1].day.condition.text
    dom.sections.image.src = `https:` + data.forecast.forecastday[1].day.condition.icon

    cardsBlock.style.margin = "0px 76px 0px 36px";
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
    if (data.current.gust_kph >= 30){
        dom.advices.advice.innerHTML += `<p class="dangerous">The wind is dangerous, try not to drive fast on an open surface.</p>`
    }
    if (data.current.temp_c < 0){
        dom.advices.advice.innerHTML += `<p class="dangerous">The roads can be slippery.</p>`
    }
    if (data.current.temp_c > 30){
        dom.advices.advice.innerHTML += `<p class="dangerous">It's very hot, leave the car in the shade.</p>`
    }
}

function adviceNextRender (data){
    dom.advices.advice.innerHTML = ''
    for (let i = 0; i<count; i++){
        if (data.forecast.forecastday[1].day.condition.text === adviceData.conditions[i].condition){
            dom.advices.advice.innerHTML = adviceData.conditions[i].advice
        }
    }
    if (data.forecast.forecastday[1].day.avgvis_km < 10){
        dom.advices.advice.innerHTML += `<p class="dangerous">Visibility will be poor on the roads.</p>`
    }
    if (data.forecast.forecastday[1].day.maxwind_kph >= 30){
        dom.advices.advice.innerHTML += `<p class="dangerous">The wind will be dangerous, try not to drive fast on an open surface.</p>`
    }
    if (data.forecast.forecastday[1].day.avgtemp_c < 0){
        dom.advices.advice.innerHTML += `<p class="dangerous">The roads can be slippery.</p>`
    }
    if (data.forecast.forecastday[1].day.avgtemp_c > 30){
        dom.advices.advice.innerHTML += `<p class="dangerous">It will be very hot, leave the car in the shade.</p>`
    }
    console.log(data.current.vis_km)
}


