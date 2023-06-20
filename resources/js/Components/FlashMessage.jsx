export default function FlashMessage({ className, message = "", ...props }) {
    return (
        <div className={`alert__message ${className}`} {...props}>
            <p>{message}</p>
        </div>
    );
}
