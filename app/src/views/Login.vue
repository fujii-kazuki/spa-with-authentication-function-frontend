<script setup lang="ts">
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
  <div class="container max-w-[600px]">
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="email">Email</label>
          <div class="mt-2">
            <input v-model="formData.email" type="text" name="email" id="email" autocomplete="email" placeholder="Email">
          </div>
        </div>
        
        <div class="sm:col-span-6">
          <label for="password">Password</label>
          <div class="mt-2">
            <input v-model="formData.password" type="password" name="password" id="password" autocomplete="current-password" placeholder="Password">
          </div>
        </div>
      </div>
    
      <div class="flex justify-center mt-10">
        <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-600">Sign In</button>
      </div>
    </form>
  </div>
</template>