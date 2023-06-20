export default function DeleteAction({ handleClick, deleted_at }) {
    return (
        <button
            style={{
                textAlign: "left",
                background: "transparent",
            }}
            onClick={handleClick}
        >
            <a className="btn sm danger">{deleted_at ? "Restore" : "Delete"}</a>
        </button>
    );
}
