import { useState } from "react"

export default function Work({ editMode }) {
    const [work, setWork] = useState(workData)

    function handleAddWork() {
        const newWork = {
            id: crypto.randomUUID(),
            profession: '',
            companyName: '',
            period: '',
            responsibilities: []
        }
        setWork([...work, newWork])
    }

    return (
        <section className="work">
            <h2>Work Experience</h2>
            {work.map(data => (
                <WorkItem
                    key={data.id}
                    editMode={editMode}
                    data={data}
                />
            ))}
            {editMode && (
                <button onClick={handleAddWork}>Add Work</button>
            )}
        </section>
    )
}

function WorkItem({ editMode, data }) {
    const [profession, setProfession] = useState(data.profession)
    const [companyName, setCompanyName] = useState(data.companyName);
    const [period, setPeriod] = useState(data.period);
    const [responsibilities, setResponsibilities] = useState(data.responsibilities);

    function handleChange(e, dataName, resId) {
        if (dataName === 'profession') {
            setProfession(e.target.value)
        }
        if (dataName === 'companyName') {
            setCompanyName(e.target.value)
        }
        if (dataName === 'period') {
            setPeriod(e.target.value)
        }
        if (dataName === 'responsibilities') {
            const updatedResponsibilities = responsibilities.map(res =>
                res.id === resId
                    ? { ...res, text: e.target.value }
                    : res
            );
            setResponsibilities(updatedResponsibilities)
        }
    }

    function handleAddResponsibility() {
        const newResponsibility = {
            id: crypto.randomUUID(),
            text: ''
        };
        setResponsibilities([...responsibilities, newResponsibility])
    }

    return (
        <div className="work-item">
            {editMode ? (
                <>
                    <div>
                        <p>Profession:</p>
                        <input 
                            type="text" 
                            value={profession} 
                            onChange={(e) => handleChange(e, 'profession')} 
                        />
                    </div>
                    <div>
                        <p>Company Name:</p>
                        <input 
                            type="text" 
                            value={companyName} 
                            onChange={(e) => handleChange(e, 'companyName')} 
                        />
                        <p>Period:</p>
                        <input 
                            type="text" 
                            value={period} 
                            onChange={(e) => handleChange(e, 'period')}
                        />
                    </div>
                    <p>Responsibilities:</p>
                    <ul>
                        {responsibilities.map(res => (
                            <li key={res.id}>
                                <input 
                                    type="text" 
                                    value={res.text} 
                                    onChange={(e) => handleChange(e, 'responsibilities', res.id)}
                                />
                            </li>
                        ))}
                        <button onClick={handleAddResponsibility}>Add Responsibility</button>
                    </ul>
                </>
            ) : (
                <>
                    <h3>Profession: {profession}</h3>
                    <p>Company Name: {companyName}</p>
                    <p>Period: {period}</p>
                    <p>Responsibilities:</p>
                    <ul>
                        {responsibilities.map(res => (
                            <li key={res.id}>{res.text}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

const workData = [
    {
        id: 'work-1',
        profession: 'Customer Service Representative',
        companyName: 'Bright Solutions Ltd., New York, NY',
        period: 'March 2021 – July 2023',
        responsibilities: [
            {id: 'res-1', text: 'Managed customer inquiries via phone and email'},
            {id: 'res-2', text: 'Resolved complaints and provided product information'},
            {id: 'res-3', text: 'Maintained customer records and updated database'},
            {id: 'res-4', text: 'Achieved 95% customer satisfaction rate'}
        ]
    },
    {
        id: 'work-2',
        profession: 'Marketing Assistant',
        companyName: 'Sunrise Media, Chicago, IL',
        period: 'June 2020 – August 2022',
        responsibilities: [
            {id: 'res-5', text: 'Created social media content and scheduled posts'},
            {id: 'res-6', text: 'Assisted with campaign planning and execution'},
            {id: 'res-7', text: 'Analyzed marketing data and prepared reports'},
            {id: 'res-8', text: 'Coordinated events and promotional activities'}
        ]
    }
]