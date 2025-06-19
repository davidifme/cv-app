import { useState } from "react"

export default function Contact() {
    const [editMode, setEditMode] = useState(true)

    function handleModeChange(isEdit) {
        setEditMode(isEdit)
    }

    return (
        <section className="contact">
            <div className="buttons">
                <button className="edit-mode" onClick={() => handleModeChange(true)} disabled={editMode}>Edit</button>
                <button className="preview-mode" onClick={() => handleModeChange(false)} disabled={!editMode}>Preview</button>
            </div>
            {contactData.map(data => (
                <ContactItem
                    key={data.id}
                    className={data.className}
                    src={data.src}
                    alt={data.src}
                    initialText={data.initialText}
                    editMode={editMode} />
            ))}
        </section>
    )
}

function ContactItem({ className, src, alt, initialText, editMode }) {
    const [text, setText] = useState(initialText)

    function handleOnChange(e) {
        setText(e.target.value)
    }

    return (
        <div className={className}>
            <img className="icon" src={src} alt={alt} />
            {editMode
            ? (<input type="text" value={text} onChange={handleOnChange} />)
            : (<p>{text}</p>)}
        </div>
    )
}

const contactData = [
    {
        id: 'phone',
        className: 'phone',
        src: 'src/assets/icons/phone.png',
        alt: 'Phone icon',
        initialText: '+48 123 456 789'
    },
    {
        id: 'email',
        className: 'email',
        src: 'src/assets/icons/mail.png',
        alt: 'Email icon',
        initialText: 'email.address@gmail.com'
    },
    {
        id: 'location',
        className: 'location',
        src: 'src/assets/icons/location.png',
        alt: 'Location icon',
        initialText: 'United States, Springfield'
    },
    {
        id: 'birth-date',
        className: 'birth-date',
        src: 'src/assets/icons/cake.png',
        alt: 'Birth date icon',
        initialText: '17.06.2003'
    }
];