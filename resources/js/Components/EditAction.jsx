import { Link } from "@inertiajs/react";

export default function EditAction({ editUrl, deleted_at }) {
    return (
        <>
            {deleted_at ? (
                <span
                    className="btn sm"
                    style={{
                        opacity: ".65",
                        pointerEvents: "none",
                    }}
                >
                    Edit
                </span>
            ) : (
                <Link href={editUrl} className="btn sm">
                    Edit
                </Link>
            )}
        </>
    );
}
