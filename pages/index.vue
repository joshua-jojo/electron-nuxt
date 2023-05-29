<script lang="ts" setup>
import {store} from "~/store"
const global = store()
</script>
<template lang="">
    <div class="min-h-screen flex flex-col justify-center items-center">
       {{global.value}}
        <button @click="() => global.value++" class="p-2 rounded-full h-10 w-10 bg-sky-500 flex justify-center items-center">+</button>
    </div>
</template>