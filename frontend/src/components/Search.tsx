import React, {useState, useRef, useEffect, InputHTMLAttributes} from 'react';
import { Search as SearchIcon, X as XIcon } from 'lucide-react'; // Import XIcon if you want a different close icon

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    submit: (value: string) => void;
}

const Search = ({ submit, ...props }: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleCancel = () => {
        setIsFocused(false);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
       if (e.keyCode === 13) {
           submit(inputRef.current?.value || '');
           setIsFocused(false);
       }
    }

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <div
            className={`
                ${isFocused
                ? 'fixed inset-0 bg-white z-999 flex flex-col items-center pt-4 transition-all duration-100 ease-in-out'
                : 'relative w-full mb-2 transition-all duration-100 ease-in-out'
            }
            `}
        >
            <div
                className={`
                    relative flex items-center
                    ${isFocused ? 'w-11/12 max-w-md' : 'w-full'}
                `}
            >
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

                <input
                    ref={inputRef}
                    {...props}
                    onFocus={handleFocus}
                    onKeyUp={handleSubmit}
                    className={`
                        pl-10 pr-3 py-2 w-full rounded-lg bg-gray-100 border-none focus:outline-none
                        ${isFocused ? 'text-lg' : ''}
                    `}
                />

                {isFocused && (
                    <button
                        onClick={handleCancel}
                        className="ml-3 px-3 py-2 text-purple-500 font-medium rounded-lg hover:bg-gray-100 focus:outline-none"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </div>
    );
};

export default Search;
