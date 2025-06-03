<template>
  <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
    <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <svg
          class="h-8 w-8 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969"
          />
          <polygon
            points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662"
          />
        </svg>
        <span class="text-xl font-semibold text-gray-800">exus</span>
      </a>

      <!-- Botón y avatar -->
      <div class="mt-2 sm:mt-0 sm:flex md:order-2 items-center gap-4">
        <!-- Botón -->
        <button
          type="button"
          class="hidden md:flex items-center gap-2 rounded-lg bg-blue-700 py-1.5 px-6 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M12 6v12M6 12h12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ route.path === '/compartidos' ? 'Compartir Banco' : 'Crear Banco' }}
        </button>

        <!-- Menú con avatar -->
        <div class="relative group">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="avatar"
            class="w-10 h-10 rounded-full cursor-pointer ring-2 ring-gray-300"
          />
          <div
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Configuración</a
            >
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >Cerrar sesión</a
            >
          </div>
        </div>
      </div>

      <!-- Menú lateral original -->
      <div
        class="hid w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium"
        >
          <li>
            <router-link to="/banco"> Bancos</router-link>
          </li>
          <li>
            <router-link to="/compartidos">Compartidos</router-link>
          </li>
          <li>
            <router-link to="/eliminados">Eliminados</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
