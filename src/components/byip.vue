<script>
    export default {
        methods: {
            checkWAux() {
                this.$emit('checkWeatherAux', this.query)
            }
        }
    };
</script>


<template>
    
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="grid grid-cols-2 gap-4 p-5">
            <div>
                <h5 class="mb-2 text-2xl font-bold dark:text-white">Busqueda Por Dirección IP</h5>
                <p class="mb-3 text-gray-700 dark:text-gray-400">Ingresa la dirección IP de la localización</p>
            </div>
            <div class="text-center">
                <input v-model="this.query" class="border rounded-lg w-full p-2" placeholder="Ejemplo: 153.65.8.20"><br>
                <button type="button" @click="checkWAux" class="text-white bg-blue-700 font-bold rounded-lg w-full py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700">Consultar</button>
            </div>
        </div>
    </div>

</template>