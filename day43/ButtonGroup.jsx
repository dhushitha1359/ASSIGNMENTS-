export default function ButtonGroup() {

    return (

        <div className="flex gap-4 m-5">

            <button
                className="
                    bg-blue-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    hover:bg-blue-700
                "
            >
                Save
            </button>

            <button
                className="
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    hover:bg-red-700
                "
            >
                Delete
            </button>

        </div>
    )
}