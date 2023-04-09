import { ModalRef } from 'modal'
import { useRef } from 'react'

export const useModal = () => {
  const modalRef = useRef<ModalRef>(null)

  return {
    ref: modalRef,
    open: () => modalRef.current?.open(),
    close: () => modalRef.current?.close(),
    isOpen: () => modalRef.current?.isOpen,
  }
}
