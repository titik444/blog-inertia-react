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

export default function Index({ flashMessage, categories }) {
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

    const onHandleDelete = (categoryId) => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this data?"
        );

        if (confirmation) {
            destroy(route("admin.category.destroy", categoryId));
        }
    };

    useEffect(() => {
        // tidak dijalankan ketika pertama kali onload
        if (searchQuery !== false) {
            const delay = setTimeout(() => {
                get(route("admin.category.index"), {
                    preserveState: true,
                    replace: true,
                });
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [searchQuery]);

    return (
        <Authenticated>
            <Head title="Manage Categories" />

            <section className="dashboard">
                <div className="container dashboard__container">
                    <SideBar />

                    <main>
                        <h2>Manage Categories</h2>
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
                                    <th>Title</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.data.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                        >
                                            No Categories Found
                                        </td>
                                    </tr>
                                ) : (
                                    categories.data.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.title}</td>
                                                <td>
                                                    <EditAction
                                                        editUrl={route(
                                                            "admin.category.edit",
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
                                                                          "admin.category.restore",
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
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>

                        {/* PAGINATION */}
                        <Pagination links={categories.links} />
                    </main>
                </div>
            </section>

            <Footer />
        </Authenticated>
    );
}
