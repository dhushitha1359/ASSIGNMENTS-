import { useState } from "react"

function LiveText() {

    const [text, setText] = useState("")

    return (
        <>
            <h1>Live Text Preview</h1>

            <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <h2>Preview: {text}</h2>
        </>
    )
}

export default LiveText