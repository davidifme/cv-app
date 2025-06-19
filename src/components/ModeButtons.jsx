export default function ModeButtons({ editMode, onModeChange }) {
    return (
        <div className="buttons">
            <button
                className="edit-mode"
                onClick={() => onModeChange(true)}
                disabled={editMode}
            >
                Edit
            </button>
            <button
                className="preview-mode"
                onClick={() => onModeChange(false)}
                disabled={!editMode}
            >
                Preview
            </button>
        </div>
    );
}