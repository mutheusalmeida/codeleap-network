import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const handleFormChange = (e: ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<any>>) => {
  const { name, value } = e.target

  setFormData((prev: any) => ({
    ...prev,
    [name]: value,
  }))
}
