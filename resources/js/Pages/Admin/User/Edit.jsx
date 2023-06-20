import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import InputSelect from "@/Components/InputSelect";
import { Head, router, useForm } from "@inertiajs/react";

export default function Edit({ user }) {
    const { data, setData, processing, errors } = useForm({
        ...user,
        roles: user.roles[0].id,
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

        router.post(route("admin.user.update", user.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <section className="form__section">
            <Head title="Edit User" />

            <div className="container form__section-container">
                <h2>Edit User</h2>

                {Object.values(errors).length > 0 && (
                    <FlashMessage
                        className="error"
                        message={Object.values(errors)[0]} // get first error message
                    />
                )}

                <form onSubmit={submit}>
                    <Input
                        name="name"
                        defaultValue={user.name}
                        type="text"
                        handleChange={onHandleChange}
                        placeholder="Name"
                        isError={errors.user}
                        isFocused={true}
                    />
                    <Input
                        name="username"
                        defaultValue={user.username}
                        type="text"
                        handleChange={onHandleChange}
                        placeholder="Username"
                        isError={errors.username}
                    />
                    <Input
                        name="email"
                        defaultValue={user.email}
                        type="email"
                        handleChange={onHandleChange}
                        placeholder="Email"
                        isError={errors.email}
                    />
                    <InputSelect
                        name="roles"
                        value={data.roles}
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
                        Edit User
                    </Button>
                </form>
            </div>
        </section>
    );
}
