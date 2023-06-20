import { useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import FlashMessage from "@/Components/FlashMessage";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />

            <section className="form__section">
                <div className="container form__section-container">
                    <h2>Sign Up</h2>

                    {Object.values(errors).length > 0 && (
                        <FlashMessage
                            className="error"
                            message={Object.values(errors)[0]} // get first error message
                        />
                    )}

                    {/* Form input */}
                    <form onSubmit={submit}>
                        <TextInput
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={data.name}
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <TextInput
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={data.username}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                        />
                        <TextInput
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <TextInput
                            name="password"
                            type="password"
                            placeholder="Create Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <TextInput
                            name="password_confirmation"
                            type="password"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        <div className="form__control">
                            <InputLabel htmlFor="avatar" value="User Avatar" />
                            <TextInput name="avatar" type="file" id="avatar" />
                        </div>

                        <PrimaryButton disabled={processing}>
                            {processing ? "Loading..." : "Sign Up"}
                        </PrimaryButton>

                        <small>
                            Already have an account?{" "}
                            <Link href={route("login")}>Sign In</Link>
                        </small>
                    </form>
                </div>
            </section>
        </>
    );
}
