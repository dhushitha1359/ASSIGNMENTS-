import { useState } from "react"

function Toggle() {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <div
            style={{
                backgroundColor: darkMode ? "black" : "white",
                color: darkMode ? "white" : "black",
                height: "100vh",
                padding: "20px"
            }}
        >
            <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Theme
            </button>
        </div>
    )
}

export default Toggle