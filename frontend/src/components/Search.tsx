import { Search as SearchIcon } from 'lucide-react';

const Search = ({ ...props }) => {
    return (
        <div className="relative w-full mb-2">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
                {...props}
                className="pl-10 pr-3 py-2 w-full rounded-lg bg-gray-100 border-none focus:outline-none"
            />
        </div>
    );
};

export default Search;
