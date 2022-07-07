export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const incrementCounter = (count = 1) => ({
    type : INCREMENT,
    payload : count,
})

export const decrementCounter = (count = 1) => ({
    type : DECREMENT,
    payload : count,
})