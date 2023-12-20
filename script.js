const button = document.getElementById('botonBusqueda')
const input = document.getElementById('ciudadEntrada')
const datosClima = document.getElementById('datosClima')
const urlBase = 'https://api.openweathermap.org/data/2.5/weather'


let api_key = 'b6bcbe29234023d18d2d9ee2c2b93984'

let difTemp = 273.15

button.addEventListener('click', () => {
    let ciudad = input.value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => mostrarDatosClima(data))
        .catch(error => console.log(error));
}

function mostrarDatosClima(response) {
    datosClima.innerHTML = ''

    let city = response.name
    let pais = response.sys.country
    let temperatura = response.main.temp - difTemp
    let humedad = response.main.humidity
    let presion = response.main.pressure
    let viento = response.wind.speed
    let vientoKmPorHora = (viento * 3.6).toFixed(1);
    let iconCode = response.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    let descripcion = response.weather[0].description
    let fecha = new Date()
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let anio = fecha.getFullYear()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()

    const datosTitulo = document.createElement('h2')
    datosTitulo.textContent = `${city}, ${pais}`
    const datosIcono = document.createElement('img');
    datosIcono.src = iconUrl;
    const datosCiudad = document.createElement('p')
    datosCiudad.textContent = `Clima: ${descripcion}`
    const datosTemperatura = document.createElement('p')
    datosTemperatura.textContent = `Temperatura: ${Math.floor(temperatura)} °C`
    const datosHumedad = document.createElement('p')
    datosHumedad.textContent = `Humedad: ${humedad} %`
    const datosPresion = document.createElement('p')
    datosPresion.textContent = `Presion: ${presion} hPa` 
    const datosViento = document.createElement('p')
    datosViento.textContent = `Viento: ${vientoKmPorHora} km/h`;
    const datosFecha = document.createElement('p')
    datosFecha.textContent = `Fecha: ${dia}/${mes}/${anio}`
    const datosHora = document.createElement('p')
    datosHora.textContent = `Hora: ${hora}:${minutos}:${segundos}`


    datosClima.appendChild(datosTitulo)
    datosClima.appendChild(datosIcono)
    datosClima.appendChild(datosCiudad)
    datosClima.appendChild(datosTemperatura)
    datosClima.appendChild(datosHumedad)
    datosClima.appendChild(datosPresion)
    datosClima.appendChild(datosViento)
    datosClima.appendChild(datosFecha)
    datosClima.appendChild(datosHora)
    datosClima.style.display = 'flex'
    datosClima.style.flexDirection = 'column'
    datosClima.style.alignItems = 'center'
    datosClima.style.justifyContent = 'center'
    datosClima.style.gap = '10px'
    datosClima.style.padding = '20px'
    datosClima.style.borderRadius = '10px'
    datosClima.style.backgroundColor = '#fff'
    datosClima.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'
}



