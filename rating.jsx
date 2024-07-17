// U89173488

import React, { useState } from 'react';
const RateMovieButton = () => {
    const [rating, setRating] = useState(0);
    const [confirmation, setConfirmation] = useState('');

    const handleRating = (rate) => {
        setRating(rate);
        setConfirmation('Thank you for your rating!');
    };

    return (
        <div>
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${rating >= star ? 'filled' : ''}`}
                        onClick={() => handleRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
            {confirmation && <div className="confirmation-message">{confirmation}</div>}
        </div>
    );
};

export default RateMovieButton;
