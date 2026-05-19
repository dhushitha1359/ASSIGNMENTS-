export default function Navbar() {

    return (

        <nav className="bg-black text-white p-4">

            <div className="flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    MyApp
                </h1>

                <ul className="flex gap-4">

                    <li>Home</li>

                    <li>About</li>

                    <li>Services</li>

                </ul>

            </div>

        </nav>
    )
}