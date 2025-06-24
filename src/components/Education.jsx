import { useState } from "react"

export default function Education({ editMode }) {
    return (
        <section className="education">
            <h2>Education</h2>
            {educationData.map(data => (
                <EducationItem
                    key={data.schoolName}
                    data={data}
                    editMode={editMode}
                />
            ))}
        </section>
    )
}

function EducationItem({ editMode, data }) {
    const [schoolName, setSchoolName] = useState(data.schoolName)
    const [graduatedDate, setGraduatedDate] = useState(data.graduated)
    const [gpaScore, setGpaScore] = useState(data.gpa)
    const [courses, setCourses] = useState(data.courses)

    function handleOnChange(e, dataName, index) {
        if (dataName === 'schoolName') {
            setSchoolName(e.target.value)
        }
        if (dataName === 'graduatedDate') {
            setGraduatedDate(e.target.value)
        }
        if (dataName === 'gpaScore') {
            setGpaScore(e.target.value)
        }
        if (dataName === 'courses') {
            const updatedCourses = [...courses]
            updatedCourses[index] = e.target.value
            setCourses(updatedCourses)
        } 
    }

    return (
        <div className="education-item">
            {editMode ? (
                <>
                    <div>
                        <input
                            className="school-name"
                            type="text"
                            value={schoolName}
                            onChange={(e) => handleOnChange(e, 'schoolName')}
                        />
                    </div>
                    <div>
                        <p>Graduated:</p>
                        <input
                            className="graduated-date"
                            type="text"
                            value={graduatedDate}
                            onChange={(e) => handleOnChange(e, 'graduatedDate')}
                        />
                    </div>
                    <div>
                        <p>GPA:</p>
                        <input
                            className="gpa-score"
                            type="text"
                            value={gpaScore}
                            onChange={(e) => handleOnChange(e, 'gpaScore')}
                        />
                    </div>
                    <p>Relevant Courses:</p>
                    <ul>
                        {courses.map((course, index) => (
                            <li key={course}>
                                <input 
                                    className="course" 
                                    type="text" 
                                    value={course} 
                                    onChange={(e) => handleOnChange(e, 'courses', index)} 
                                />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <h3>{schoolName}</h3>
                    <p>{graduatedDate}</p>
                    <p>GPA: {gpaScore}</p>
                    <p>Relevant Courses:</p>
                    <ul>
                        {courses.map((course) => (
                            <li key={course}>{course}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

const educationData = [
    {
        schoolName: "Riverview High School",
        graduated: "June 2019",
        gpa: "3.8/4.0",
        courses: [
            "Advanced Math",
            "Physics",
            "English Literature",
            "Computer Science"
        ]
    }
]