import { useState } from "react";
import Contact from "./Contact";
import Strengths from "./Strengths";
import Languages from "./Languages";
import ModeButtons from "./ModeButtons";
import FullName from "./FullName";

export default function Cv() {
    const [editMode, setEditMode] = useState(true)

    return (
        <>
            <aside>
                <img className="profile-picture" src="src/assets/images/pfp.jpeg" alt="" />
                <ModeButtons editMode={editMode} onModeChange={setEditMode} />
                <Contact editMode={editMode} />
                <Strengths editMode={editMode} />
                <Languages editMode={editMode} />
            </aside>
            <div className="content">
                <FullName editMode={editMode} initialName={"Sarah Mitchell"}/>
            </div>
        </>
    );
}
