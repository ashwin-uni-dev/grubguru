import {useNavigate} from 'react-router-dom';
import {useTopReview} from '../hooks/useTopReview';

const ReviewPanel = () => {
    const navigate = useNavigate();
    const {review: topReview} = useTopReview();

    return (
        <div className='rounded-lg bg-gray-100 w-full px-6 py-2' onClick={() => navigate('/reviews')}>
            <p className='text-md font-semibold'>Reviews</p>
            {
                topReview.length > 0 &&
                <>
                    <div className="flex overflow-hidden text-ellipsis whitespace-nowrap">
                        <span className='text-sm font-semibold text-purple-500 mr-1'>@{topReview[0].author}</span>
                        <span className='text-sm text-gray-500 truncate'>{topReview[0].review}</span>
                    </div>
                    <p className='text-xs text-gray-500'>See more</p>
                </>
            }
            {
                topReview.length == 0 && <p className='text-sm text-gray-500'>Be the first to review</p>
            }
        </div>
    )
}

export default ReviewPanel;