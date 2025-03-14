export default function TextAreaField({ value, onChange }) {
    return (
        <textarea
        value={value}
        onChange={onChange}
        placeholder="write something..."
        className="w-full h-32 p-4 my-4 text-lg hover:ring-blue-500 hover:border-blue-500"
        />
    );
}