import {useNavigate} from 'react-router-dom';

const ReviewPanel = () => {
    const navigate = useNavigate();

    return (
        <div className='rounded-lg bg-gray-100 w-full px-6 py-2' onClick={() => navigate('/reviews')}>
            <p className='text-md font-semibold'>Reviews</p>
            <p className='text-sm text-gray-500'>Be the first to review</p>
        </div>
    )
}

export default ReviewPanel;