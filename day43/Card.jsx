function Card() {

    return (
        <div className="max-w-sm p-6 m-5 bg-white border border-gray-300 rounded-xl shadow-lg">

            <h1 className="text-2xl font-bold mb-3">
                React Tailwind Card
            </h1>

            <p className="text-gray-600 mb-4">
                This is a styled card component using Tailwind CSS utilities.
            </p>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Read More
            </button>

        </div>
    )
}

export default Card