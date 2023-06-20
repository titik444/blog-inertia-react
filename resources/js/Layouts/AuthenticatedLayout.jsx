import Nav from "@/Components/Nav";

export default function Authenticated({ children }) {
    return (
        <>
            <Nav />

            {children}
        </>
    );
}
