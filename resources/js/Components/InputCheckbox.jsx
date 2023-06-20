export default function InputCheckbox({ name, label, checked, handleChange }) {
    return (
        <div className="form__control inline">
            <input
                name={name}
                type="checkbox"
                id={name}
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}
