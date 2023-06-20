import { useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Sign in" />

            <section className="form__section">
                <div className="container form__section-container">
                    <h2>Sign In</h2>

                    {Object.values(errors).length > 0 && (
                        <FlashMessage
                            className="error"
                            message={Object.values(errors)[0]} // get first error message
                        />
                    )}

                    {/* Form Input */}
                    <form onSubmit={submit}>
                        <TextInput
                            name="email"
                            type="email"
                            placeholder="Username or Email"
                            value={data.email}
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <TextInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <PrimaryButton disabled={processing}>
                            {processing ? "Loading..." : "Sign In"}
                        </PrimaryButton>

                        <small>
                            Don't have an account?{" "}
                            <Link href={route("register")}>Sign Up</Link>
                        </small>
                    </form>
                </div>
            </section>
        </>
    );
}
