import Authenticated from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

export default function Services() {
    return (
        <Authenticated>
            <Head title="Service" />

            <section className="empty__page">
                <h1>Services Page</h1>
            </section>

            <Footer showCategoryBtn={true} />
        </Authenticated>
    );
}
