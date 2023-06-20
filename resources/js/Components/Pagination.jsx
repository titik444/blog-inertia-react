import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="center" style={{ marginTop: "3%" }}>
            <div className="pagination">
                {links.map((data) => {
                    return (
                        <Link
                            key={data.label}
                            href={data.url}
                            className={data.active ? "active" : ""}
                        >
                            {data.label === "&laquo; Previous"
                                ? "«"
                                : data.label === "Next &raquo;"
                                ? "»"
                                : data.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
