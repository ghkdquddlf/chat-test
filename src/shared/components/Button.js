export default function Button({ children }) {
    return (
        <button
        type="submit"
        className="max-w-full px-8 py-2 font-bold text-black border-2 rounded-2xl bg-neutral-200"
        >
            {children}
        </button>
    );
}