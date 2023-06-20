import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import InputCheckbox from "@/Components/InputCheckbox";
import InputSelect from "@/Components/InputSelect";
import Textarea from "@/Components/Textarea";
import { Head, router, useForm } from "@inertiajs/react";

export default function Edit({ isAdmin, categories, post }) {
    const { data, setData, processing, errors } = useForm({
        ...post,
        thumbnail: undefined,
    });

    const handleCheckboxChange = () => {
        setData("featured", !data.featured);
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        router.post(route("admin.post.update", post.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <section className="form__section">
            <Head title="Edit Post" />

            <div className="container form__section-container">
                <h2>Edit Post</h2>

                {Object.values(errors).length > 0 && (
                    <FlashMessage
                        className="error"
                        message={Object.values(errors)[0]} // get first error message
                    />
                )}

                <form onSubmit={submit}>
                    <Input
                        name="title"
                        defaultValue={post.title}
                        type="text"
                        handleChange={onHandleChange}
                        placeholder="Title"
                        isError={errors.title}
                        isFocused={true}
                    />

                    <InputSelect
                        name="category_id"
                        value={data.category_id}
                        options={categories.map((category) => ({
                            value: category.id,
                            label: category.title,
                        }))}
                        handleChange={onHandleChange}
                    />

                    <Textarea
                        name="body"
                        defaultValue={post.body}
                        rows={4}
                        handleChange={onHandleChange}
                        placeholder="Body"
                        isError={errors.body}
                    />
                    {isAdmin && (
                        <InputCheckbox
                            name="featured"
                            label="Featured"
                            checked={data.featured}
                            handleChange={handleCheckboxChange}
                        />
                    )}
                    <div className="form__control">
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <Input
                            name="thumbnail"
                            type="file"
                            handleChange={onHandleChange}
                            isError={errors.thumbnail}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="btn"
                        processing={processing}
                    >
                        Update post
                    </Button>
                </form>
            </div>
        </section>
    );
}
