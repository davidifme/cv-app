import { useState } from "react"

export default function Education({ editMode }) {
    const [education, setEducation] = useState(educationData);

    function handleAddEducation() {
        const newEducation = {
            id: crypto.randomUUID(),
            schoolName: "",
            graduated: "",
            gpa: "",
            courses: []
        };
        setEducation([...education, newEducation]);
    }

    return (
        <section className="education">
            <h2>Education</h2>
            {education.map((data) => (
                <EducationItem
                    key={data.id}
                    data={data}
                    editMode={editMode}
                />
            ))}
            {editMode && (
                <button onClick={handleAddEducation}>Add Education</button>
            )}
        </section>
    )
}

function EducationItem({ editMode, data }) {
    const [schoolName, setSchoolName] = useState(data.schoolName)
    const [graduatedDate, setGraduatedDate] = useState(data.graduated)
    const [gpaScore, setGpaScore] = useState(data.gpa)
    const [courses, setCourses] = useState(data.courses);

    function handleOnChange(e, dataName, courseId) {
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
            const updatedCourses = courses.map(course => 
                course.id === courseId 
                    ? { ...course, text: e.target.value }
                    : course
            );
            setCourses(updatedCourses);
        } 
    }

    function handleAddCourse() {
        const newCourse = {
            id: crypto.randomUUID(),
            text: ''
        };
        setCourses([...courses, newCourse]);
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
                        {courses.map((course) => (
                            <li key={course.id}>
                                <input 
                                    className="course" 
                                    type="text" 
                                    value={course.text} 
                                    onChange={(e) => handleOnChange(e, 'courses', course.id)} 
                                />
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleAddCourse}>Add Course</button>
                </>
            ) : (
                <>
                    <h3>{schoolName}</h3>
                    <p>{graduatedDate}</p>
                    <p>GPA: {gpaScore}</p>
                    <p>Relevant Courses:</p>
                    <ul>
                        {courses.map((course) => (
                            <li key={course.id}>{course.text}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

const educationData = [
    {
        id: "edu-1",
        schoolName: "Riverview High School",
        graduated: "June 2019",
        gpa: "3.8/4.0",
        courses: [
            { id: "course-1", text: "Advanced Math" },
            { id: "course-2", text: "Physics" },
            { id: "course-3", text: "English Literature" },
            { id: "course-4", text: "Computer Science" }
        ]
    }
]
