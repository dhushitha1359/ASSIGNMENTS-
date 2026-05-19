import { useRef } from "react"

function FocusInput() {

    const inputRef = useRef()

    function handleFocus() {
        inputRef.current.focus()
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter text"
                ref={inputRef}
            />

            <button onClick={handleFocus}>
                Focus
            </button>
        </div>
    )
}

export default FocusInput