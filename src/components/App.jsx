import { useState } from "react";
import Cv from "./Cv";
import ModeButtons from "./ModeButtons";

export default function App() {
  const [editMode, setEditMode] = useState(true)

  return (
    <>
      <header>
        <h1>CV Creator</h1>
        <p>Fast, simple, and responsive.</p>
        <ModeButtons editMode={editMode} onModeChange={setEditMode} />
      </header>
      <main>
        <Cv editMode={editMode}></Cv>
      </main>
    </>
  )
}
