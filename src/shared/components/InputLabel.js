export default function InputLabel({ name, label, type, value, onChange, placeholder }) {
  return (
      <label htmlFor={label} className="text-sm">
        {name}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-md tracking-[0.025em] px-5 relative flex items-center justify-stretch h-[3.25rem] leading-[1.5rem] font-medium w-full text-black"
        required
      />
      </label>
  );
}