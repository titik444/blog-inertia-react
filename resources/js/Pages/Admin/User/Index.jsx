import Authenticated from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import SideBar from "@/Components/SideBar";
import Footer from "@/Components/Footer";
import Search from "@/Components/Search";
import Pagination from "@/Components/Pagination";
import EditAction from "@/Components/EditAction";
import DeleteAction from "@/Components/DeleteAction";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Index({ flashMessage, users }) {
    const {
        delete: destroy,
        put,
        get,
        data,
        setData,
    } = useForm({
        q: new URLSearchParams(window.location.search).get("q") || "",
    });

    const [searchQuery, setSearchQuery] = useState(false);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
        setSearchQuery(event.target.value);
    };

    const onHandleDelete = (userId) => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this data?"
        );

        if (confirmation) {
            destroy(route("admin.user.destroy", userId));
        }
    };

    useEffect(() => {
        // tidak dijalankan ketika pertama kali onload
        if (searchQuery !== false) {
            const delay = setTimeout(() => {
                get(route("admin.user.index"), {
                    preserveState: true,
                    replace: true,
                });
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [searchQuery]);

    return (
        <Authenticated>
            <Head title="Manage Users" />

            <section className="dashboard">
                <div className="container dashboard__container">
                    <SideBar />

                    <main>
                        <h2>Manage Users</h2>

                        {flashMessage?.message && (
                            <FlashMessage
                                className={flashMessage.type}
                                message={flashMessage.message}
                            />
                        )}

                        {/* SEARCH BAR */}
                        <Search value={data.q} handleChange={onHandleChange} />

                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            style={{ textAlign: "center" }}
                                        >
                                            No Users Found
                                        </td>
                                    </tr>
                                ) : (
                                    users.data.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>{data.username}</td>
                                                <td>
                                                    <EditAction
                                                        editUrl={route(
                                                            "admin.user.edit",
                                                            data.id
                                                        )}
                                                        deleted_at={
                                                            data.deleted_at
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <DeleteAction
                                                        handleClick={() => {
                                                            data.deleted_at
                                                                ? put(
                                                                      route(
                                                                          "admin.user.restore",
                                                                          data.id
                                                                      )
                                                                  )
                                                                : onHandleDelete(
                                                                      data.id
                                                                  );
                                                        }}
                                                        deleted_at={
                                                            data.deleted_at
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    {data.roles[0].id == 1
                                                        ? "Yes"
                                                        : "No"}
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>

                        {/* PAGINATION */}
                        <Pagination links={users.links} />
                    </main>
                </div>
            </section>

            <Footer />
        </Authenticated>
    );
}
