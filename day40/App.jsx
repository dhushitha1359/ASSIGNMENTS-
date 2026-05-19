import { useState } from "react"

import TextInput from "./TextInput"

export default function App() {

    // FORM STATE
    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    // PREVIEW STATE
    const [submittedData, setSubmittedData] = useState(null)

    // EMAIL VALIDATION
    const emailValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    // FORM VALIDATION
    const isFormValid =
        name &&
        email &&
        password &&
        emailValid

    // SUBMIT
    function handleSubmit(e) {

        e.preventDefault()

        const formData = {
            name,
            email,
            password
        }

        console.log(formData)

        setSubmittedData(formData)
    }

    // CLEAR FORM
    function handleClear() {

        setName("")

        setEmail("")

        setPassword("")

        setSubmittedData(null)
    }

    return (

        <div style={{ padding: "20px" }}>

            <h1>Signup Form</h1>

            <form onSubmit={handleSubmit}>

                <TextInput
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    placeholder="Enter name"
                />

                <TextInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    placeholder="Enter email"
                />

                {
                    email &&
                    !emailValid && (

                        <p style={{ color: "red" }}>

                            Invalid Email Format

                        </p>
                    )
                }

                <TextInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    placeholder="Enter password"
                />

                <button
                    type="submit"
                    disabled={!isFormValid}
                    style={{
                        marginRight: "10px"
                    }}
                >
                    Submit
                </button>

                <button
                    type="button"
                    onClick={handleClear}
                >
                    Clear
                </button>

            </form>

            <hr />

            <h2>Preview Panel</h2>

            {
                submittedData && (

                    <div>

                        <p>

                            <b>Name:</b>
                            {" "}
                            {submittedData.name}

                        </p>

                        <p>

                            <b>Email:</b>
                            {" "}
                            {submittedData.email}

                        </p>

                        <p>

                            <b>Password:</b>
                            {" "}
                            {submittedData.password}

                        </p>

                    </div>
                )
            }

        </div>
    )
}