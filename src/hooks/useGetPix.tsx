import React, { useEffect, useState } from 'react';
import { getPix } from '../api/Api';

export type TRegister = {
  txid: string
  horario: string
  infoPagador: string
  valor: string
}

const useGetPix = (selectedDate: Date) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [registers, setRegisters] = useState<TRegister[]>([])
  
  const updateData = () => {
    setIsLoading(true)
    const endDate = new Date(selectedDate)
    endDate.setHours(23, 59, 59)
    const startDate = new Date(selectedDate)
    startDate.setHours(0, 0, 0)
    getPix(startDate, endDate).then((response) => {
        setRegisters(response.data.pix)
        setIsLoading(false)
        setIsError(false)
      })
      .catch((error) => {
        console.error(error)
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    updateData()
  }, [selectedDate])

  return {
    registers,
    isLoading,
    isError,
    updateData
  }
}

export default useGetPix