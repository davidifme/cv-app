import { useState } from "react";

export default function Strengths({ editMode }) {
    return (
        <section className="strengths">
            <h3>Strengths</h3>
            <ul className="strengths-list">
                {strengthsData.map(data => (
                    <StrengthsItem
                        key={data.text}
                        initialText={data.text}
                        editMode={editMode}
                    />
                ))}
            </ul>
        </section>
    )
}

function StrengthsItem({ editMode, initialText }) {
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

const strengthsData = [
    { text: 'Strong communication skills' },
    { text: 'Problem-solving ability' },
    { text: 'Teamwork' },
    { text: 'Adaptability' },
    { text: 'Attention to detail' }
]