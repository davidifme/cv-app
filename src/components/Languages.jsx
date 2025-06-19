import { useState } from "react"

export default function Languages({ editMode }) {
    return (
        <section className="languages">
            <h3>Languages</h3>
            <ul className="languages-list">
                {languagesData.map(data => (
                    <LanguagesItem
                        key={data.text}
                        initialText={data.text}
                        editMode={editMode}
                    />
                ))}
            </ul>
        </section>
    )
}

function LanguagesItem({ editMode, initialText }) {
    const [text, setText] = useState(initialText)

    function handleOnChange(e) {
        setText(e.target.value)
    }

    return (
        <>
            {editMode
                ? (<input type="text" value={text} onChange={handleOnChange} />)
                : (<li>{text}</li>)
            }
        </>
    )
}

const languagesData = [
    { text: 'Polish' },
    { text: 'English (intermediate)' }
]