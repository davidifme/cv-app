import { useState } from "react"

export default function FullName({ editMode, initialName }) {
    const [fullName, setFullName] = useState(initialName)

    function handleOnChange(e) {
        setFullName(e.target.value)
    }

    return (
        <section className="full-name">
            {editMode
            ? (<input type="text" value={fullName} onChange={handleOnChange} />)
            : (<h1>{fullName}</h1>)
            }
        </section>
    )
}