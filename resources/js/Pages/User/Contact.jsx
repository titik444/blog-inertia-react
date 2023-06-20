import Authenticated from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

export default function Contact() {
    return (
        <Authenticated>
            <Head title="Contact" />

            <section className="empty__page">
                <h1>Contact Page</h1>
            </section>

            <Footer showCategoryBtn={true} />
        </Authenticated>
    );
}
