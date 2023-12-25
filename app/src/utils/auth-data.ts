import { AuthHeaders } from '@/types/auth'

// LocalStorageから認証トークンを取得
export const getAuthDataFromStorage = (): AuthHeaders => {
  return {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'expiry': localStorage.getItem('expiry'),
    'uid': localStorage.getItem('uid'),
    'Content-Type': 'application/json'
  }
}

// localStorageに認証トークンを設定
export const setAuthDataFromResponse = (ad: any): void => {
  const authData: AuthHeaders = ad;
  if (authData['access-token'] && authData['client'] && authData['uid'] && authData['expiry']) {
    localStorage.setItem('access-token', authData['access-token'])
    localStorage.setItem('client', authData['client'])
    localStorage.setItem('uid', authData['uid'])
    localStorage.setItem('expiry', authData['expiry'])
  }
}

// localStorageの認証トークンを削除
export const removeAuthDataFromStorage = (): void => {
  localStorage.removeItem('access-token')
  localStorage.removeItem('client')
  localStorage.removeItem('uid')
  localStorage.removeItem('expiry')
}