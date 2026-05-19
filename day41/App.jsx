import { useState, useEffect, useCallback, useMemo } from "react"

export default function App() {

    const [users, setUsers] = useState([])

    const [filter, setFilter] = useState("")

    // FETCH USERS
    const fetchUsers = useCallback(async (signal) => {

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                { signal }
            )

            const data = await response.json()

            setUsers(data)

            console.log("Users fetched")

        }

        catch (error) {

            console.log("Fetch aborted")

        }

    }, [])

    // useEffect ON MOUNT + CLEANUP
    useEffect(() => {

        const controller = new AbortController()

        fetchUsers(controller.signal)

        return () => {

            controller.abort()

            console.log("Cleanup executed")
        }

    }, [fetchUsers])

    // FILTER USERS
    const filteredUsers = useMemo(() => {

        console.log("Filtering users")

        return users.filter((user) =>

            user.name
                .toLowerCase()
                .includes(filter.toLowerCase())
        )

    }, [users, filter])

    // EXPENSIVE DERIVED VALUE
    const averageNameLength = useMemo(() => {

        console.log("Calculating average")

        if (filteredUsers.length === 0)
            return 0

        let total = 0

        filteredUsers.forEach((user) => {

            total += user.name.length

        })

        return (
            total / filteredUsers.length
        ).toFixed(2)

    }, [filteredUsers])

    return (

        <div className="p-5">

            <h1>User List</h1>

            <input
                type="text"
                placeholder="Search users"
                value={filter}
                onChange={(e) =>
                    setFilter(e.target.value)
                }
            />

            <button
                onClick={() => fetchUsers()}
                style={{
                    marginLeft: "10px"
                }}
            >
                Refresh
            </button>

            <h3>
                Average Name Length :
                {averageNameLength}
            </h3>

            <ul>

                {
                    filteredUsers.map((user) => (

                        <li key={user.id}>

                            {user.name}

                        </li>
                    ))
                }

            </ul>

        </div>
    )
}