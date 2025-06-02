<template>
  <div class="relative group w-full max-w-4xl mx-auto mb-6">
    <!-- Card con padding derecho adicional para evitar superposición -->
    <div
      class="lg:flex shadow rounded-lg border border-gray-300 transition-shadow duration-300 hover:shadow-xl overflow-hidden pr-24"
    >
      <!-- Contenido -->
      <div class="w-full py-5 px-4 flex flex-col gap-2">
        <!-- Título con puntos suspensivos -->
        <h2
          class="font-semibold text-gray-800 text-xl truncate max-w-full"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        >
          Matematicas I
        </h2>

        <!-- Descripción -->
        <p class="text-gray-600 text-sm">
          Esta es una descripción secundaria del contenido, mostrando más detalles o contexto. Lorem
        </p>
      </div>
    </div>

    <!-- Botones flotantes afuera del card -->
    <div
      class="absolute top-1/2 -right-16 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-right-4 transition-all duration-300 flex flex-col gap-3 z-20"
    >
      <!-- Botón Eliminar -->
      <button
        class="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 shadow-md"
        title="Eliminar"
      >
        🗑️
      </button>

      <!-- Botón Editar -->
      <button
        class="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-600 shadow-md"
        title="Editar"
      >
        ✏️
      </button>

      <!-- Botón Copiar -->
      <button
        class="bg-gray-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-600 shadow-md"
        title="Copiar"
      >
        📋
      </button>

      <!-- Botón Compartir -->
      <button
        class="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 shadow-md"
        title="Compartir"
      >
        📤
      </button>
    </div>
  </div>
</template>
