const InputField = ({ elRef, placeholder, type, error }) => {
  return (
    <div className="m-2">
      <input
        ref={elRef}
        type={type}
        placeholder={placeholder}
        className="bg-black bg-opacity-50 text-white w-80 h-10 rounded-md p-4 py-6 border-solid border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
