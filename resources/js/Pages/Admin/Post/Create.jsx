import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import InputCheckbox from "@/Components/InputCheckbox";
import InputSelect from "@/Components/InputSelect";
import Textarea from "@/Components/Textarea";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ isAdmin, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category_id: 1,
        body: "",
        thumbnail: "",
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

        post(route("admin.post.store"));
    };

    return (
        <section className="form__section">
            <Head title="Add Post" />

            <div className="container form__section-container">
                <h2>Add Post</h2>

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
                        isError={errors.user}
                        isFocused={true}
                    />
                    <InputSelect
                        name="category_id"
                        options={categories.map((category) => ({
                            value: category.id,
                            label: category.title,
                        }))}
                        handleChange={onHandleChange}
                    />
                    <Textarea
                        name="body"
                        rows={10}
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
                        Add Post
                    </Button>
                </form>
            </div>
        </section>
    );
}
