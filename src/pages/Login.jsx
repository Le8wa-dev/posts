import React from 'react'
import { MyButton } from '../components/UI/button/MyButton'
import { MyInput } from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

export const Login = () => {
  const {isAuth, setIsAuth} = React.useContext(AuthContext);
  const Login = (e) => {
    e.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true');
  }
  return (
    <div>
      <h1>Страница для Логина</h1>
      <form onSubmit={Login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}
