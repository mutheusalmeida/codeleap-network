export const loading = (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, seconds * 1000)
  })
}
