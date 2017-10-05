export function buildFieldHocContext() {
  return {
    context: {
      setValue: jest.fn(),
      setValidations: jest.fn()
    }
  }
}

export function buildEvent(value) {
  return { target: { value } }
}
