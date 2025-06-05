import BackablePage from "../../components/BackablePage";
import Review from "./components/Review";
import React, { useState } from "react";

const Index = () => {
    const [reviews, setReviews] = useState(generateMockReviews(6));
    const [newReview, setNewReview] = useState("");

    const handleAddReview = () => {
        if (newReview.trim() === "") return;
        setReviews([
            ...reviews,
            { author: "you", review: newReview, date: new Date().toISOString() }
        ]);
        setNewReview("");
    };

    return (
        <BackablePage title={<p className="font-semibold">Reviews</p>}>
            <div className="flex flex-col h-[calc(100vh-4rem)]">
                <div className="flex-1 overflow-y-auto p-2 space-y-3">
                    {reviews.map((review, index) => (
                        <Review
                            key={index}
                            author={review.author}
                            review={review.review}
                            date={review.date}
                        />
                    ))}
                </div>

                <div className="sticky bottom-0 bg-white p-2 border-t flex gap-2">
                    <input
                        type="text"
                        className="flex-1 border rounded px-3 py-2 bg-gray-100"
                        placeholder="Write a review..."
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                    />
                    <button
                        onClick={handleAddReview}
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg"
                    >
                        Post
                    </button>
                </div>
            </div>
        </BackablePage>
    );
};

export default Index;
