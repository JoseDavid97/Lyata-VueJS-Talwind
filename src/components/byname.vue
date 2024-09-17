<script setup>

import { ref } from 'vue'
import axios from 'axios';

const query = ref('')
const options = {method: "GET"};
const url = "https://api.weatherstack.com/current?access_key={PASTE_YOUR_API_KEY_HERE}&query="

function checkWeather(){
    
    console.log(query._value);

    try {
        fetch(url+query._value, options).then((response) => response.json())
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}

</script>

<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="grid grid-cols-2 gap-4 p-5">
            <div>
                <h5 class="mb-2 text-2xl font-bold dark:text-white">Busqueda Por Nombre</h5>
                <p class="mb-3 text-gray-700 dark:text-gray-400">Ingresa el nombre de una localización, por ejemplo, el nombre de una ciudad</p>
            </div>
            <div class="text-center">
                <input v-model="query" class="border rounded-lg w-full p-2" placeholder="Ejemplo: 'New York'"><br>
                <button type="button" @click="checkWeather" class="text-white bg-blue-700 font-bold rounded-lg w-full py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700">Consultar</button>
            </div>
        </div>
    </div>

    <div id="id_response" class="container mx-auto mt-10 max-w-full hidden">
      <H1>Holaaaaaa</H1>
    </div>
</template>