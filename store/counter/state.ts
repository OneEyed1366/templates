export interface counterModuleState {
  counter: number,
}

export default (): counterModuleState => ({
  counter: 3
})
