<script setup>

import { ref } from 'vue'
import axios from 'axios'

const errorTitle = ref('')
const errorMsg = ref('')
const errorHidden = ref(true)
const responseHidden = ref(true)
const access_key = 'fda9a082754effbe07d94037bad31d83'

// Response parameters
const locationName = ref('')
const locationType = ref('')
const units = ref('')

const l_country = ref('')
const l_lat = ref('')
const l_lon = ref('')
const l_localtime = ref('')
const l_name = ref('')
const l_tzone = ref('')
const l_utc_offset = ref('')

const m_cloudcover = ref('')
const m_feelslike = ref('')
const m_temperature = ref('')
const m_humidity = ref('')
const m_time = ref('')
const m_precip = ref('')
const m_pressure = ref('')
const m_uv_index = ref('')
const m_wind_speed = ref('')

function clearError(){
  errorHidden.value = true
}

function checkWeather(query){
    if (query){
        axios.get('https://api.weatherstack.com/current?access_key='+access_key+'&query='+encodeURIComponent(query))
        .then(function (response) {
    
            // Mostramos los datos obtenidos en la consola 
            console.log(response.data);

            if ('success' in response.data){
                if (response.data.error.code == 615) {
                    errorMsg.value = 'No se reconoce el parámetro consultado.'
                } else {
                    errorMsg.value = 'Lo sentimos, se ha presentado un error desconocido'
                }
                errorTitle.value = 'Error !!'
                errorHidden.value = false
                responseHidden.value = true
            } else {
                locationName.value = response.data.request.query
                locationType.value = response.data.request.type
                units.value = response.data.request.unit

                l_country.value = response.data.location.country
                l_name.value = response.data.location.name
                l_lat.value = response.data.location.lat
                l_lon.value = response.data.location.lon
                l_localtime.value = response.data.location.localtime
                l_tzone.value = response.data.location.timezone_id
                l_utc_offset.value = response.data.location.utc_offset

                m_cloudcover.value = response.data.current.cloudcover
                m_feelslike.value = response.data.current.feelslike
                m_temperature.value = response.data.current.temperature
                m_humidity.value = response.data.current.humidity
                m_time.value = response.data.current.observation_time
                m_precip.value = response.data.current.precip
                m_pressure.value = response.data.current.pressure
                m_uv_index.value = response.data.current.uv_index
                m_wind_speed.value = response.data.current.wind_speed

                errorHidden.value = true
                responseHidden.value = false
            }
    
        })

        .catch(function (error) {
            console.log(error)
            errorTitle.value = 'Error !!'
            //errorMsg = error.data
            errorHidden.value = false
            responseHidden.value = true
        })
    
        .finally(function () {
        // Se ejecuto sin problemas 
        });
    } else {
        errorTitle.value = 'Aviso !!'
        errorMsg.value = 'Debes ingresar el nombre de una ciudad !!'
        errorHidden.value = false
        responseHidden.value = true
    }
}

</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 max-w-5xl mx-auto">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../weatherstack_logo_white.png" class="h-8" alt="WeatherStack Logo" />
        </RouterLink>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <RouterLink to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inicio</RouterLink>
            </li>
            <li>
              <RouterLink to="/byName" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nombre</RouterLink>
            </li>
            <li>
              <RouterLink to="/byLatLon" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cordenadas</RouterLink>
            </li>
            <li>
              <RouterLink to="/byZipCode" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Código postal</RouterLink>
            </li>
            <li>
              <RouterLink to="/byIP" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dirección IP</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="container mx-auto mt-10 max-w-5xl">
      <RouterView @checkWeatherAux="checkWeather" />

      <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 py-4 px-6" :class="{hidden: errorHidden}">
        <div class="grid grid-cols-2">
          <div>
            <H1 class="mb-2 text-2xl font-bold dark:text-white">{{ errorTitle }}</H1>
            <p class="mb-3 text-gray-700 dark:text-gray-400">{{ errorMsg }}</p>
          </div>
          <div class="mx-auto">
            <button type="button" @click="clearError" class="text-white bg-blue-700 font-bold rounded-lg px-4 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700">Cerrar</button>
          </div>
        </div>
      </div>

      <div class="cbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 py-4 px-6" :class="{hidden: responseHidden}">
          <div class="container border border-gray-400 rounded-lg p-4 max-w-full">
              <H1 class="mb-3 text-2xl font-bold dark:text-white">Solicitud</H1>
              <ul class="dark:text-white rounded-lg grid gap-y-3">
                  <li><div class="grid grid-cols-2">
                          <div>Localización:</div> 
                          <div>{{ locationName }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Tipo de localización:</div>  
                          <div>{{ locationType }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Unidades:</div>  
                          <div>{{ units }}</div>
                      </div>
                  </li>
              </ul>
          </div>

          <div class="container mt-4 border border-gray-400 rounded-lg p-4 max-w-full">
              <H1 class="mb-3 text-2xl font-bold dark:text-white">Datos de la localización</H1>
              <ul class="dark:text-white rounded-lg grid gap-y-3">
                  <li><div class="grid grid-cols-2">
                          <div>País:</div> 
                          <div>{{ l_country }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Nombre:</div>  
                          <div>{{ l_name }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Latitud y Longitud:</div>  
                          <div>{{ l_lat }} {{ l_lon }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Hora y fecha local:</div>  
                          <div>{{ l_localtime }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Zona Horaria:</div>  
                          <div>{{ l_tzone }}, UTC {{ l_utc_offset }}</div>
                      </div>
                  </li>
              </ul>
          </div>

          <div class="container mt-4 border border-gray-400 rounded-lg p-4 max-w-full">
              <H1 class="mb-3 text-2xl font-bold dark:text-white">Mediciones</H1>
              <ul class="dark:text-white rounded-lg grid gap-y-3">
                  <li><div class="grid grid-cols-2">
                          <div>Nubes:</div> 
                          <div>{{ m_cloudcover }}%</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Sensación térmica / Temperatura:</div>  
                          <div>{{ m_feelslike }} °C / {{ m_temperature }} °C</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Humedad relativa:</div>  
                          <div>{{ m_humidity }}%</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Hora de la muestra:</div>  
                          <div>{{ m_time }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Precipitación:</div>  
                          <div>{{ m_precip }}%</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Presión:</div>  
                          <div>{{ m_pressure }} mBar</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Indice UV:</div>  
                          <div>{{ m_uv_index }}</div>
                      </div>
                  </li>
                  <li><div class="grid grid-cols-2">
                          <div>Velocidad del viento:</div>  
                          <div>{{ m_wind_speed }} km/h</div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </main>
</template>

