import { Link, Routes, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Users from "./Users"
import UserDetails from "./UserDetails"

function App() {

    return (
        <div>

            <nav>
                <Link to="/">Home</Link> |{" "}

                <Link to="/about">About</Link> |{" "}

                <Link to="/users">Users</Link>
            </nav>

            <hr />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/users" element={<Users />} />

                <Route path="/users/:id" element={<UserDetails />} />

            </Routes>

        </div>
    )
}

export default App