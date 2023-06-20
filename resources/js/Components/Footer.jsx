import { Link, usePage } from "@inertiajs/react";
import moment from "moment";

export default function Footer({ showCategoryBtn = false }) {
    const { footerCategories } = usePage().props;

    return (
        <div>
            {showCategoryBtn && (
                <section className="category__buttons">
                    <div className="container category__buttons-container">
                        {footerCategories.map((category) => {
                            return (
                                <Link
                                    key={category.id}
                                    href={route("category.show", category.slug)}
                                    className="category__button"
                                >
                                    {category.title}
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}

            <footer>
                <div className="footer__socials">
                    <Link href="https://youtube.com/">
                        <i className="uil uil-youtube" />
                    </Link>
                    <Link href="https://facebook.com/">
                        <i className="uil uil-facebook-f" />
                    </Link>
                    <Link href="https://instagram.com/">
                        <i className="uil uil-instagram-alt" />
                    </Link>
                    <Link href="https://linkedlin.com/">
                        <i className="uil uil-linkedin" />
                    </Link>
                    <Link href="https://twitter.com/">
                        <i className="uil uil-twitter" />
                    </Link>
                </div>
                <div className="container footer__container">
                    <article>
                        <h4>Categories</h4>
                        <ul>
                            {footerCategories.map((category) => {
                                return (
                                    <li key={category.id}>
                                        <Link
                                            href={route(
                                                "category.show",
                                                category.slug
                                            )}
                                        >
                                            {category.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </article>
                    <article>
                        <h4>Support</h4>
                        <ul>
                            <li>
                                <Link>Online Support</Link>
                            </li>
                            <li>
                                <Link>Call Numbers</Link>
                            </li>
                            <li>
                                <Link>Emails</Link>
                            </li>
                            <li>
                                <Link>Social Support</Link>
                            </li>
                            <li>
                                <Link>Location</Link>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h4>Blog</h4>
                        <ul>
                            <li>
                                <Link>Safety</Link>
                            </li>
                            <li>
                                <Link>Repair</Link>
                            </li>
                            <li>
                                <Link>Recent</Link>
                            </li>
                            <li>
                                <Link>Popular</Link>
                            </li>
                            <li>
                                <Link>Categories</Link>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h4>Permalinks</h4>
                        <ul>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                            <li>
                                <Link>Services</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </article>
                </div>

                <div className="footer__copyright">
                    <small>Copyright © {moment().year()} Titik.</small>
                </div>
            </footer>
        </div>
    );
}
