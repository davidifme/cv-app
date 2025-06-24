import { useState } from "react";

export default function Strengths({ editMode }) {
    const [strengths, setStrengths] = useState(strengthsData);

    function handleAddStrength() {
        const newStrength = { text: '' };
        setStrengths([...strengths, newStrength]);
    }

    return (
        <section className="strengths">
            <h3>Strengths</h3>
            <ul className="strengths-list">
                {strengths.map((data, index) => (
                    <StrengthsItem
                        key={data.text || `new-${index}`}
                        initialText={data.text}
                        editMode={editMode}
                    />
                ))}
            </ul>
            {editMode && (
                <button onClick={handleAddStrength}>Add Strength</button>
            )}
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