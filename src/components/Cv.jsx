import Contact from "./Contact";
import Strengths from "./Strengths";
import Languages from "./Languages"; 
import FullName from "./FullName";
import Education from "./Education";
import Work from "./Work";
import pfpImage from '../assets/images/pfp.jpeg';

export default function Cv({ editMode }) {
    return (
        <>
            <aside>
                <img className="profile-picture" src="src/assets/images/pfp.jpeg" alt="" />
                <Contact editMode={editMode} />
                <Strengths editMode={editMode} />
                <Languages editMode={editMode} />
            </aside>
            <div className="content">
                <FullName editMode={editMode} initialName={"Sarah Mitchell"}/>
                <Education editMode={editMode} />
                <Work editMode={editMode} />
            </div>
        </>
    );
}
