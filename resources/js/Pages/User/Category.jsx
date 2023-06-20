import Authenticated from "@/Layouts/AuthenticatedLayout";
import PostCard from "@/Components/PostCard";
import FlashMessage from "@/Components/FlashMessage";
import Pagination from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

export default function Category({ category, posts }) {
    return (
        <Authenticated>
            <Head title="Category" />

            <header className="category__title">
                <h2>{category.title}</h2>
            </header>

            {posts.data.length === 0 ? (
                <FlashMessage
                    className="error lg"
                    message="No post found for this category"
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
