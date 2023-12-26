<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { reactive } from 'vue'
import { login } from '@/api/auth'

interface FormData {
  email: string;
  password: string;
}

const formData: FormData = reactive({
  email: '',
  password: ''
})

const handleLogin = async () => {
  await login(formData.email, formData.password)
    .then((res) => {
      if (res?.status === 200) {
        console.log(res)
      } else {
        alert('メールアドレスかパスワードが間違っています。')
      }
    })
    .catch(() => {
      alert('ログインに失敗しました。')
    })
}
</script>

<template>
  <HelloWorld msg="Vite + Vue" />

  <form @submit.prevent="handleLogin">
    <div>
      <label for="email">Email</label>
      <input v-model="formData.email" type="text" name="email" id="email" autocomplete="email" placeholder="Email">
    </div>
  
    <div>
      <label for="password">Password</label>
      <input v-model="formData.password" type="password" name="password" id="password" autocomplete="current-password" placeholder="Password">
    </div>
  
    <button type="submit">Sign In</button>
  </form>
</template>