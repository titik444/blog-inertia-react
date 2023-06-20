import Authenticated from "@/Layouts/AuthenticatedLayout";
import PostCard from "@/Components/PostCard";
import Footer from "@/Components/Footer";
import Input from "@/Components/Input";
import FlashMessage from "@/Components/FlashMessage";
import Pagination from "@/Components/Pagination";
import { Head, useForm } from "@inertiajs/react";

export default function Blog({ posts }) {
    const { data, setData, get, processing } = useForm({
        q: new URLSearchParams(window.location.search).get("q") || "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        get(route("blog.index"));
    };

    return (
        <Authenticated>
            <Head title="Blog" />

            <section className="search__bar">
                <form
                    className="container search__bar-container"
                    onSubmit={submit}
                >
                    <div>
                        <i className="uil uil-search"></i>
                        <Input
                            name="q"
                            type="search"
                            value={data.q}
                            handleChange={onHandleChange}
                            placeholder="Search"
                            isFocused={true}
                        />
                    </div>
                    <button type="submit" className="btn" disabled={processing}>
                        {processing ? "Loading..." : "Go"}
                    </button>
                </form>
            </section>

            {posts.data.length === 0 ? (
                <FlashMessage
                    className="error lg"
                    message="No post found"
                    style={{ marginTop: "3rem" }}
                />
            ) : (
                <section className="posts">
                    <div className="container posts__container">
                        {posts.data.map((data) => {
                            return (
                                <PostCard
                                    key={data.id}
                                    slug={data.slug}
                                    category={data.category}
                                    title={data.title}
                                    body={data.body}
                                    thumbnail={data.thumbnail}
                                    created_by={data.created_by}
                                    created_at={data.created_at}
                                />
                            );
                        })}
                    </div>

                    {/* PAGINATION */}
                    <Pagination links={posts.links} />
                </section>
            )}

            <Footer showCategoryBtn={true} />
        </Authenticated>
    );
}
