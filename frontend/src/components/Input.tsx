const Input = ({ ...props }) => {
    return (
        <input
            {...props}
            className="p-2 w-full rounded-lg bg-gray-100 border-none focus:outline-none"
        />
    );
};

export default Input;
