interface TextInputProps {
  placeholder?: string;
}

export const TextInput = ({ placeholder = "Enter Text" }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        placeholder={placeholder}
        className={`px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 `}
      />
    </div>
  );
};
