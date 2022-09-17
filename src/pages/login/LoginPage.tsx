import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from "../../api/Api"
import { setAuthToken } from '../../services/auth-token'
import "./LoginPage.scss"

const LoginPage = () => {
  const [clientId, setClientId] = useState("")
  const [secretId, setSecretId] = useState("")
  const navigate = useNavigate()

  const handleLogin = (event: React.MouseEvent) => {
    event.preventDefault()
    login(clientId, secretId)
      .then((response) => {
        setAuthToken(response.data.access_token)
        navigate("/")
      })
      .catch((error) => {
        toast.error("Credenciais invalida")
        setClientId("")
        setSecretId("")
        console.error(error)
      })
  }

  return (
    <div className="login">
      <div className="main container">
        <h1>Login</h1>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="ClientId"
            name="username"
            onChange={(event) => {
              setClientId(event.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="SecretId"
            type="password"
            name="password"
            onChange={(event) => {
              setSecretId(event.target.value)
            }}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
