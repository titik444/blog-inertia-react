import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Nav() {
    const { app, auth } = usePage().props;
    const { component } = usePage();

    const [isShow, setIsShow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsShow((current) => !current);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Ubah ukuran sesuai kebutuhan
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav>
            <div className="container nav__container">
                <Link href={route("index")} className="nav__logo">
                    {app.name}
                </Link>
                <ul
                    className="nav__items"
                    style={
                        isMobile
                            ? isShow
                                ? { display: "flex" }
                                : { display: "none" }
                            : { display: "flex" }
                    }
                >
                    <li className={component === "User/Blog" ? "active" : ""}>
                        <Link href={route("blog.index")}>Blog</Link>
                    </li>
                    <li className={component === "User/About" ? "active" : ""}>
                        <Link href={route("about.index")}>About</Link>
                    </li>
                    <li
                        className={
                            component === "User/Services" ? "active" : ""
                        }
                    >
                        <Link href={route("services.index")}>Services</Link>
                    </li>
                    <li
                        className={component === "User/Contact" ? "active" : ""}
                    >
                        <Link href={route("contact.index")}>Contact</Link>
                    </li>
                    {auth.user ? (
                        <li className="nav__profile">
                            <div className="avatar">
                                <img
                                    src={
                                        auth.user.profile_photo
                                            ? `/storage/${auth.user.profile_photo}`
                                            : "https://via.placeholder.com/480x480.png/CCCCCC?text=no+image"
                                    }
                                    onError={({ currentTarget }) => {
                                        // image from url
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src =
                                            auth.user.profile_photo;
                                    }}
                                />
                            </div>

                            <ul>
                                <li>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        method="POST"
                                        href={route("logout")}
                                        as="button"
                                        style={{
                                            fontSize: "0.9rem",
                                            lineHeight: "1.6",
                                            textAlign: "left",
                                            letterSpacing: "normal",
                                            padding: 16,
                                            width: "100%",
                                            height: "100%",
                                            background: "var(--color-red)",
                                            color: "var(--color-bg)",
                                            display: "inline-block",
                                        }}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <li>
                            <Link href={route("login")}>Sign In</Link>
                        </li>
                    )}
                </ul>

                {isMobile && (
                    <>
                        <button
                            id="open__nav-btn"
                            style={
                                isShow
                                    ? { display: "none" }
                                    : { display: "inline-block" }
                            }
                            onClick={handleClick}
                        >
                            <i className="uil uil-bars" />
                        </button>
                        <button
                            id="close__nav-btn"
                            style={
                                isShow
                                    ? { display: "inline-block" }
                                    : { display: "none" }
                            }
                            onClick={handleClick}
                        >
                            <i className="uil uil-multiply" />
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
