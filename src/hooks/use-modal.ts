import { ModalState } from 'modal'
import { useCallback, useState } from 'react'

type useModalProps = {
  isCurrentlyOpen?: boolean
}

const useModal = ({ isCurrentlyOpen = false }: useModalProps = {}): ModalState => {
  const [isOpen, setIsOpen] = useState(isCurrentlyOpen)

  const setOpen = useCallback((isOpen: boolean) => setIsOpen(isOpen), [])

  const open = useCallback(() => setIsOpen(true), [])

  const close = useCallback(() => setIsOpen(false), [])

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  return {
    isOpen,
    setOpen,
    open,
    close,
    toggle,
  }
}

export default useModal
