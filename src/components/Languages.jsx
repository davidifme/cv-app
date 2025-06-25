import { useState } from "react"

export default function Languages({ editMode }) {
    const [language, setLanguage] = useState(languagesData)

    function handleAddLanguage() {
        const newLanguage = {
            id: crypto.randomUUID(),
            text: ''
        }
        setLanguage([...language, newLanguage])
    }

    return (
        <section className="languages">
            <h3>Languages</h3>
            <ul className="languages-list">
                {language.map(data => (
                    <LanguagesItem
                        key={data.id}
                        data={data}
                        editMode={editMode}
                    />
                ))}
            </ul>
            {editMode && (
                <button onClick={handleAddLanguage}>Add Language</button>
            )}
        </section>
    )
}

function LanguagesItem({ editMode, data }) {
    const [text, setText] = useState(data.text)

    function handleOnChange(e) {
        setText(e.target.value)
    }

    return (
        <li>
            {editMode
                ? (<input type="text" value={text} onChange={handleOnChange} />)
                : text
            }
        </li>
    )
}

const languagesData = [
    { id: 'lang-1', text: 'Polish' },
    { id: 'lang-2', text: 'English (intermediate)' }
]