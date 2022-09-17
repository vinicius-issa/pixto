import React, { useEffect, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import "./PixPage.scss"
import useGetPix from '../../hooks/useGetPix';
import Header from '../../components/Header';


const PixPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  
  const {
    registers,
    isError,
    isLoading,
    updateData
  } = useGetPix(selectedDate)

  

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const getHours = (value: string) => {
    const date = new Date(value)
    const hour = `${date.getHours()}:${date.getMinutes()}`

    return hour
  }

  const handleSelectedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSelectedDate(new Date(event.currentTarget.value))
  }

  const handleUpdate = () => {
    updateData()
  }

  if (isError) {
    return <div> An error ocurred </div>
  }
  return (
    <div className="container main">
      <Header />
      <header>
        <h1>Pixto</h1>
      </header>
      <div className="date-menu">
        <button className="btn btn-primary" onClick={handleUpdate}>Atualizar</button>
        <input
          type="date"
          className="form-control date-select"
          value={formatDate(selectedDate)}
          onChange={handleSelectedDate}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Nome</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        { isLoading ? <tr>
          <td colSpan={3} className='spinner-container'>
          <ClipLoader />
        </td>
          </tr> : 
        registers.map((pix) => (
          <tr key={pix.txid}>
            <td>{`${getHours(pix.horario)}`}</td>
            <td>{pix.infoPagador}</td>
            <td>R$ {pix.valor}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default PixPage
