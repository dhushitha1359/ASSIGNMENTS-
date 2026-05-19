export default function CustomButton({ text, color }) {

    const baseClasses =
        "text-white px-4 py-2 rounded-lg hover:opacity-80"

    return (

        <button className={`${baseClasses} ${color}`}>

            {text}

        </button>
    )
}