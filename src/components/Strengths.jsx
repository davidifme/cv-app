import { useState } from "react";

export default function Strengths({ editMode }) {
    const [strengths, setStrengths] = useState(strengthsData);

    function handleAddStrength() {
        const newStrength = {
            id: crypto.randomUUID(),
            text: ''
        };
        setStrengths([...strengths, newStrength]);
    }

    return (
        <section className="strengths">
            <h3>Strengths</h3>
            <ul className="strengths-list">
                {strengths.map((data) => (
                    <StrengthsItem
                        key={data.id}
                        editMode={editMode}
                        data={data}
                    />
                ))}
            </ul>
            {editMode && (
                <button onClick={handleAddStrength}>Add Strength</button>
            )}
        </section>
    )
}

function StrengthsItem({ editMode, data }) {
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

const strengthsData = [
    { id: 'strength-1', text: 'Strong communication skills' },
    { id: 'strength-2', text: 'Problem-solving ability' },
    { id: 'strength-3', text: 'Teamwork' },
    { id: 'strength-4', text: 'Adaptability' },
    { id: 'strength-5', text: 'Attention to detail' }
]