import { useRouter } from 'next/router'
import { useState } from 'react'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()

  const saveToLocalStorage = e => {
    e.preventDefault()
    if (username === 'testing' && password === '123') {
      localStorage.setItem('loggedIn', 'true')
      router.back()
    }
  }

  return (
    <Layout>
      <Container>
        <Header />
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={saveToLocalStorage}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                style={{ cursor: 'pointer' }}
                value="Login"
              />
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default Login
