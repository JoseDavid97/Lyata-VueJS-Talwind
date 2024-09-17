<template>
    <div class="bg-white border py-4 px-6 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold dark:text-white">Bienvenido al entorno de pruebas de WeatherStack</h5>
        <p class="mb-3 text-gray-700 dark:text-gray-400">Aplicación diseñada para la prueba técnica de Lyata con la API abierta de WeatherStack. 
                                                         Cuenta con las siguientes funcionalidades gratuitas de WeatherStack para la consulta de medidas de Meteorología:
        </p>
        <ul class="dark:text-white border border-gray-500 rounded-lg p-4 grid gap-y-3">
            <li><RouterLink to="/byName">1. Consulta por nombre de ciudad</RouterLink></li>
            <li><RouterLink to="/byLatLon">2. Consulta por latitud y longitud de la localización</RouterLink></li>
            <li><RouterLink to="/byZipCode">3. Consulta por código postal de la localización</RouterLink></li>
            <li><RouterLink to="/byIP">4. Consulta por la dirección IP relacionada con la localización</RouterLink></li>
        </ul>
    </div>
</template>