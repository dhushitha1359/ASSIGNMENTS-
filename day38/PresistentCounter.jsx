import { useReducer, useEffect } from "react"

function reducer(state, action) {

    switch (action.type) {

        case "INCREMENT":
            return state + 1

        case "DECREMENT":
            return state - 1

        case "RESET":
            return 0

        default:
            return state
    }
}

function PersistentCounter() {

    const savedCount = localStorage.getItem("count")

    const initialValue = savedCount ? Number(savedCount) : 0

    const [count, dispatch] = useReducer(reducer, initialValue)

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    return (
        <div>
            <h1>Count : {count}</h1>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>
        </div>
    )
}

export default PersistentCounter