import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function SideBar() {
    const { component } = usePage();
    const { auth } = usePage().props;

    const [isShow, setIsShow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsShow((current) => !current);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600); // Ubah ukuran sesuai kebutuhan
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile && (
                <>
                    <button
                        id="show__sidebar-btn"
                        className="sidebar__toggle"
                        style={
                            isShow
                                ? { display: "none" }
                                : { display: "inline-block" }
                        }
                        onClick={handleClick}
                    >
                        <i className="uil uil-angle-right-b" />
                    </button>
                    <button
                        id="hide__sidebar-btn"
                        className="sidebar__toggle"
                        style={
                            isShow
                                ? { display: "inline-block" }
                                : { display: "none" }
                        }
                        onClick={handleClick}
                    >
                        <i className="uil uil-angle-left-b" />
                    </button>
                </>
            )}

            <aside style={isShow ? { left: 0 } : { left: "-100%" }}>
                <ul>
                    <li>
                        <Link href={route("admin.post.create")}>
                            <i className="uil uil-pen" />
                            <h5>Add Post</h5>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("admin.post.index")}
                            className={
                                component === "Admin/Post/Index" ? "active" : ""
                            }
                        >
                            <i className="uil uil-postcard" />
                            <h5>Manage Posts</h5>
                        </Link>
                    </li>

                    {auth.user.roles[0].name == "admin" && (
                        <li>
                            <Link href={route("admin.user.create")}>
                                <i className="uil uil-user-plus"></i>
                                <h5>Add User</h5>
                            </Link>
                        </li>
                    )}

                    {auth.user.roles[0].name == "admin" && (
                        <li>
                            <Link
                                href={route("admin.user.index")}
                                className={
                                    component === "Admin/User/Index"
                                        ? "active"
                                        : ""
                                }
                            >
                                <i className="uil uil-users-alt"></i>
                                <h5>Manage Users</h5>
                            </Link>
                        </li>
                    )}

                    {auth.user.roles[0].name == "admin" && (
                        <li>
                            <Link href={route("admin.category.create")}>
                                <i className="uil uil-edit"></i>
                                <h5>Add Category</h5>
                            </Link>
                        </li>
                    )}

                    {auth.user.roles[0].name == "admin" && (
                        <li>
                            <Link
                                href={route("admin.category.index")}
                                className={
                                    component === "Admin/Category/Index"
                                        ? "active"
                                        : ""
                                }
                            >
                                <i className="uil uil-list-ul"></i>
                                <h5>Manage Categories</h5>
                            </Link>
                        </li>
                    )}
                </ul>
            </aside>
        </div>
    );
}
