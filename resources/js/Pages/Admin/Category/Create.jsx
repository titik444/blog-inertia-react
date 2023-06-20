import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { setData, post, processing, errors } = useForm({
        title: "",
        description: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.category.store"));
    };

    return (
        <section className="form__section">
            <Head title="Add Category" />

            <div className="container form__section-container">
                <h2>Add Category</h2>

                {Object.values(errors).length > 0 && (
                    <FlashMessage
                        className="error"
                        message={Object.values(errors)[0]} // get first error message
                    />
                )}

                <form onSubmit={submit}>
                    <Input
                        name="title"
                        type="text"
                        handleChange={onHandleChange}
                        placeholder="Title"
                        isError={errors.title}
                        isFocused={true}
                    />
                    <Textarea
                        name="description"
                        rows={4}
                        handleChange={onHandleChange}
                        placeholder="Description"
                        isError={errors.description}
                    />
                    <Button
                        type="submit"
                        className="btn"
                        processing={processing}
                    >
                        Add Category
                    </Button>
                </form>
            </div>
        </section>
    );
}
