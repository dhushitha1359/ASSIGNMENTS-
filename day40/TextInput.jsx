export default function TextInput({

    label,
    type,
    value,
    onChange,
    placeholder

}) {

    return (

        <div style={{ marginBottom: "15px" }}>

            <label>

                <b>{label}</b>

            </label>

            <br />

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    padding: "8px",
                    width: "250px",
                    marginTop: "5px"
                }}
            />

        </div>
    )
}