<script setup lang="ts">
  import { Navigation } from '@/types/navigation'

  const navigation: Navigation = [
    { name: 'Home', to: '/' },
    { name: 'Login', to: '/login' },
    { name: 'Logout', to: '/logout' }
  ];
</script>

<template>
  <header class="bg-gray-800">
    <div class="container">
      <div class="relative flex h-16 items-center justify-between">
        <ul class="flex items-center space-x-4">
          <li v-for="item in navigation">
            <RouterLink
              :to="item.to"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              active-class="bg-gray-900 text-white"
              >{{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
