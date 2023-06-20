import Authenticated from "@/Layouts/AuthenticatedLayout";
import FeaturedPost from "@/Components/FeaturedPost";
import PostCard from "@/Components/PostCard";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

export default function LandingPage({ featured, posts }) {
    return (
        <Authenticated>
            <Head title="Home" />

            <FeaturedPost
                slug={featured.slug}
                category={featured.category}
                title={featured.title}
                body={featured.body}
                thumbnail={featured.thumbnail}
                created_by={featured.created_by}
                created_at={featured.created_at}
            />
            <section className="posts">
                <div className="container posts__container">
                    {posts.map((data) => {
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
            </section>

            <Footer showCategoryBtn={true} />
        </Authenticated>
    );
}
