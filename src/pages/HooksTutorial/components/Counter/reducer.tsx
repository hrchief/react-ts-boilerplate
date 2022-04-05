export const initialState = { count: 0 }

export function init(initialCount: any) {
  return { count: initialCount.count }
}

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}