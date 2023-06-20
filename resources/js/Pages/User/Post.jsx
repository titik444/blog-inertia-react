import Authenticated from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Components/Footer";
import moment from "moment";
import { Head } from "@inertiajs/react";

export default function Post({ post }) {
    return (
        <Authenticated>
            <Head title={post.title} />

            <section className="singlepost">
                <div className="container singlepost__container">
                    <h2>{post.title}</h2>
                    <div className="post__author">
                        <div className="post__author-avatar">
                            <img
                                src={
                                    post.created_by.profile_photo
                                        ? `/storage/${post.created_by.profile_photo}`
                                        : "https://via.placeholder.com/480x480.png/CCCCCC?text=no+image"
                                }
                                onError={({ currentTarget }) => {
                                    // image from url
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src =
                                        post.created_by.profile_photo;
                                }}
                            />
                        </div>
                        <div className="post__author-info">
                            <h5>By: {post.created_by.name}</h5>
                            <small>
                                {moment(post.created_at).format(
                                    "MMMM D, Y - H:mm"
                                )}
                            </small>
                        </div>
                    </div>
                    <div className="singlepost__thumbnail">
                        <img
                            src={
                                post.thumbnail
                                    ? `/storage/${post.thumbnail}`
                                    : "https://via.placeholder.com/640x480.png/CCCCCC?text=no+image"
                            }
                            onError={({ currentTarget }) => {
                                // image from url
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = post.thumbnail;
                            }}
                        />
                    </div>
                    <p>{post.body}</p>
                </div>
            </section>
            {/* END SINGLE POST */}

            <Footer showCategoryBtn={true} />
        </Authenticated>
    );
}
