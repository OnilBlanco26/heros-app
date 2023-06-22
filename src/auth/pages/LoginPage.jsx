import { useNavigate } from "react-router-dom"

const LoginPage = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="m-8">
        <h1>Login</h1>
        <hr />

        <button onClick={handleLogin } className="btn btn-warning  btn-outline">
          Login
        </button>
    </div>
  )
}

export default LoginPage