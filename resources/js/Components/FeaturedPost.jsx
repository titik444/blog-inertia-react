import { Link } from "@inertiajs/react";
import moment from "moment";

export default function FeaturedPost({
    slug,
    category,
    title,
    body,
    thumbnail,
    created_by,
    created_at,
}) {
    return (
        <section className="featured">
            <div className="container featured__container">
                <div className="post__thumbnail">
                    <img
                        src={
                            thumbnail
                                ? `/storage/${thumbnail}`
                                : "https://via.placeholder.com/640x480.png/CCCCCC?text=no+image"
                        }
                        onError={({ currentTarget }) => {
                            // image from url
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = thumbnail;
                        }}
                    />
                </div>
                <div className="post__info">
                    <Link
                        href={route("category.show", category.slug)}
                        className="category__button"
                    >
                        {category.title}
                    </Link>
                    <h2 className="post__title">
                        <Link href={route("post.show", slug)}>{title}</Link>
                    </h2>
                    <p className="post__body">{body}</p>
                    <div className="post__author">
                        <div className="post__author-avatar">
                            <img
                                src={
                                    created_by.profile_photo
                                        ? `/storage/${created_by.profile_photo}`
                                        : "https://via.placeholder.com/480x480.png/CCCCCC?text=no+image"
                                }
                                onError={({ currentTarget }) => {
                                    // image from url
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src =
                                        created_by.profile_photo;
                                }}
                            />
                        </div>
                        <div className="post__author-info">
                            <h5>By: {created_by.name}</h5>
                            <small>
                                {moment(created_at).format("MMMM D, Y - H:mm")}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
