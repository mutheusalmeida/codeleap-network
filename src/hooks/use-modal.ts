import { ModalRefType } from 'modal'
import { useRef } from 'react'

export const useModal = () => {
  const ModalRefType = useRef<ModalRefType>(null)

  return {
    ref: ModalRefType,
    open: () => ModalRefType.current?.open(),
    close: () => ModalRefType.current?.close(),
    isOpen: () => ModalRefType.current?.isOpen,
  }
}
