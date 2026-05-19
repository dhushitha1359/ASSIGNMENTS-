import Navbar from "./Navbar"
import Card from "./Card"
import ButtonGroup from "./ButtonGroup"
import CustomButton from "./CustomButton"

function App() {

    return (

        <div>

            <Navbar />

            <Card />

            <ButtonGroup />

            <div className="flex gap-4 m-5">

                <CustomButton
                    text="Success"
                    color="bg-green-500"
                />

                <CustomButton
                    text="Warning"
                    color="bg-yellow-500"
                />

            </div>

        </div>
    )
}

export default App