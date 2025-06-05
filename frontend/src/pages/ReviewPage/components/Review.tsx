interface Props {
    author: string;
    review: string;
    date: string; // ISO string or any format parsable by Date
}

const formatTimeAgo = (dateStr: string) => {
    const now = new Date();
    const past = new Date(dateStr);
    const diffMs = now.getTime() - past.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    console.log(seconds, minutes, hours, days, months, years);

    if (years > 0) return `${years}y ago`;
    if (months > 0) return `${months}mo ago`;
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    if (seconds > 0) return `${seconds}s ago`;
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
