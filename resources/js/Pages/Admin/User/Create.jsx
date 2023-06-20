import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import InputSelect from "@/Components/InputSelect";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { setData, post, processing, errors } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        roles: 0,
        avatar: "",
    });

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

        post(route("admin.user.store"));
    };

    return (
        <section className="form__section">
            <Head title="Add User" />

            <div className="container form__section-container">
                <h2>Add User</h2>

                {Object.values(errors).length > 0 && (
                    <FlashMessage
                        className="error"
                        message={Object.values(errors)[0]} // get first error message
                    />
                )}

                <form onSubmit={submit}>
                    <Input
                        name="name"
                        type="text"
                        handleChange={onHandleChange}
                        placeholder="Name"
                        isError={errors.user}
                        isFocused={true}
                    />
                    <Input
                        name="username"
                        type="text"
                        handleChange={onHandleChange}
                        placeholder="Username"
                        isError={errors.username}
                    />
                    <Input
                        name="email"
                        type="email"
                        handleChange={onHandleChange}
                        placeholder="Email"
                        isError={errors.email}
                    />
                    <InputSelect
                        name="roles"
                        options={[
                            { label: "Author", value: 0 },
                            { label: "Admin", value: 1 },
                        ]}
                        handleChange={onHandleChange}
                    />
                    <div className="form__control">
                        <label htmlFor="avatar">User Avatar</label>
                        <Input
                            name="avatar"
                            type="file"
                            handleChange={onHandleChange}
                            isError={errors.avatar}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="btn"
                        processing={processing}
                    >
                        Add User
                    </Button>
                </form>
            </div>
        </section>
    );
}
