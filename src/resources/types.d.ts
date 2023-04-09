declare module 'modal' {
  export type ModalRef = {
    close: () => void
    open: () => void
    isOpen: boolean
  }
}
