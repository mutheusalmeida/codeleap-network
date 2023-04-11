import { ModalState } from 'modal'
import { useCallback, useState } from 'react'

type useModalProps = {
  isCurrentlyOpen?: boolean
}

const useModal = ({ isCurrentlyOpen = false }: useModalProps = {}): ModalState => {
  const [isOpen, setOpen] = useState(isCurrentlyOpen)

  const open = useCallback(() => setOpen(true), [])

  const close = useCallback(() => setOpen(false), [])

  const toggle = useCallback(() => setOpen(prev => !prev), [])

  return {
    isOpen,
    setOpen,
    open,
    close,
    toggle,
  }
}

export default useModal
