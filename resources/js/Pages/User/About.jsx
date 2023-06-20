import Authenticated from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

export default function About() {
    return (
        <Authenticated>
            <Head title="About" />

            <section className="empty__page">
                <h1>About Page</h1>
            </section>

            <Footer showCategoryBtn={true} />
        </Authenticated>
    );
}
