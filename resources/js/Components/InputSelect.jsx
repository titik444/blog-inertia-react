export default function InputSelect({ name, value, options, handleChange }) {
    return (
        <select name={name} value={value} onChange={handleChange}>
            {options.map((option) => (
                <option value={option.value} key={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
