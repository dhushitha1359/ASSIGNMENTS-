import { useState } from "react"

export default function App() {

    // PRODUCTS ARRAY
    const productsData = [

        { id: 1, name: "Laptop" },

        { id: 2, name: "Phone" },

        { id: 3, name: "Keyboard" },

        { id: 4, name: "Mouse" }

    ]

    // STATES
    const [filter, setFilter] = useState("")

    const [hoveredId, setHoveredId] = useState(null)

    // FILTER PRODUCTS
    const filteredProducts = productsData.filter((product) =>

        product.name
            .toLowerCase()
            .includes(filter.toLowerCase())
    )

    return (

        <div style={{ padding: "20px" }}>

            <h1>Product List</h1>

            {/* FILTER INPUT */}

            <input
                type="text"
                placeholder="Search product"
                value={filter}
                onChange={(e) =>
                    setFilter(e.target.value)
                }
                style={{
                    padding: "8px",
                    marginBottom: "20px"
                }}
            />

            {/* CONDITIONAL RENDERING */}

            {
                filteredProducts.length > 0 ? (

                    <ul>

                        {
                            filteredProducts.map((product) => (

                                <li
                                    key={product.id}

                                    onMouseEnter={() =>
                                        setHoveredId(product.id)
                                    }

                                    onMouseLeave={() =>
                                        setHoveredId(null)
                                    }

                                    className={
                                        hoveredId === product.id
                                            ? "highlight"
                                            : ""
                                    }

                                    style={{
                                        padding: "10px",
                                        marginBottom: "10px",
                                        border: "1px solid gray",
                                        borderRadius: "5px",

                                        backgroundColor:
                                            hoveredId === product.id
                                                ? "lightblue"
                                                : "white",

                                        transition: "0.3s"
                                    }}
                                >

                                    {product.name}

                                </li>
                            ))
                        }

                    </ul>

                ) : (

                    <h3>No products available</h3>
                )
            }

        </div>
    )
}