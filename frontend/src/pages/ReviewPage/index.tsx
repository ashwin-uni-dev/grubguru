import BackablePage from "../../components/BackablePage";
import Review from "./components/Review";
import React, { useState } from "react";
import { useReviews } from './hooks/useReviews';
import {BackendRequest} from "../../lib/api";

const Index = () => {
    const { reviews, foodId } = useReviews();
    const [review, setNewReview] = useState('');

    const handleAddReview = async () => {
        await BackendRequest
            .to('reviews')
            .post({ review, foodId })
            .execute();

        setNewReview('');
    }

    return (
        <BackablePage title={<p className="font-semibold">Reviews</p>}>
            <div className="flex flex-col h-[calc(100vh-4rem)]">
                <div className="flex-1 overflow-y-auto p-2 space-y-3">
                    {
                        reviews != null && reviews.map((review, index) => (
                            <Review
                                key={index}
                                author={review.author}
                                review={review.review}
                                date={review.createdAt}
                            />
                        ))
                    }
                </div>

                <div className="sticky bottom-0 bg-white p-2 border-t flex gap-2">
                    <input
                        type="text"
                        className="flex-1 border rounded px-3 py-2 bg-gray-100"
                        placeholder="Write a review..."
                        onChange={(e) => setNewReview(e.target.value)}
                        value={review}
                    />
                    <button
                        onClick={handleAddReview}
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg">
                        Post
                    </button>
                </div>
            </div>
        </BackablePage>
    );
};

export default Index;
