import { ChangeEvent } from 'react'

export const handleFormChange = (e: ChangeEvent<HTMLInputElement>, updateForm: (name: string, value: string) => void) => {
  const { name, value } = e.target

  updateForm(name, value)
}
