<script setup lang="ts">
import { logout } from '@/api/auth'
import router from '@/router'

const handleLogout = () => {
  logout().then(() => {
    router.push('/')
  })
}
</script>

<template>
  <button @click="handleLogout">Log Out</button>
</template>