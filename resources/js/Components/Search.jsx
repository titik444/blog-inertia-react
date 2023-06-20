export default function Search({ value, handleChange }) {
    return (
        <form
            style={{
                margin: "0px 0 1rem 0",
                lineHeight: 1,
                float: "right",
            }}
        >
            <div>
                <i className="uil uil-search"></i>
                <input
                    name="q"
                    type="search"
                    value={value}
                    placeholder="Search"
                    onChange={(e) => handleChange(e)}
                    style={{
                        borderBottom: "1px solid var(--color-primary-variant)",
                        borderRadius: "unset",
                        width: "18rem",
                        backgroundColor: "transparent",
                    }}
                />
            </div>
        </form>
    );
}
