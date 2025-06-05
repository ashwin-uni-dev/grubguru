interface Props {
    author: string;
    review: string;
    date: string; // ISO string or any format parsable by Date
}

const formatTimeAgo = (dateStr: string) => {
    const now = new Date();
    const past = new Date(dateStr);
    const diffMs = now.getTime() - past.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));

    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'just now';
};

const Review = ({ author, review, date }: Props) => {
    return (
        <div className="w-full rounded-2xl px-4 py-2 bg-white border">
            <div className="flex items-center text-sm gap-1 text-gray-400">
                <p className='text-purple-500 font-semibold'>@{author}</p>
                <span className="text-xs">•</span>
                <p>{formatTimeAgo(date)}</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
        </div>
    );
};

export default Review;
