import React from "react"
import { useNavigate } from "react-router-dom"
import Logout from "../icons/Logout.svg"
import { removeAuthToken } from "../services/auth-token"
import "./Header.scss"

const Header = () => {
  const navigate = useNavigate()

  const handleLogoff = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeAuthToken()
    navigate("/login")
  }

  return (
    <div className="header">
      <button className="btn btn-light" onClick={handleLogoff}>
        Sair
        <span>
          <Logout />
        </span>
      </button>
    </div>
  )
}

export default Header
