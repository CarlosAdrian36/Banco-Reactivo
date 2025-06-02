<script setup lang="ts">
import BancoList from '@/modules/Banco/components/BancoList.vue';
</script>

<template>
  <div class="pt-32 bg-white">
    <h1 class="text-center text-2xl font-bold text-gray-800">Banco de Reactivos Home banco</h1>
  </div>
  <div class="flex flex-wrap gap-3 justify-center mb-6">
    <button
      class="px-4 py-2 rounded-full text-sm font-medium border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition-all"
    >
      Todos
    </button>
    <button
      class="px-4 py-2 rounded-full text-sm font-medium border border-green-600 bg-white text-gray-700 hover:bg-green-100 transition-all"
    >
      Activos
    </button>
    <button
      class="px-4 py-2 rounded-full text-sm font-medium border border-red-600 bg-white text-gray-700 hover:bg-red-100 transition-all"
    >
      Inactivos
    </button>
    <button
      class="px-4 py-2 rounded-full text-sm font-medium border border-yellow-500 bg-white text-gray-700 hover:bg-yellow-100 transition-all"
    >
      Archivados
    </button>
  </div>
  <BancoList />
</template>
