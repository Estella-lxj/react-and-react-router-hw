import { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const stars = [1, 2, 3, 4, 5];

    return (
        <div>
            {stars.map(num => {
                const color = num <= (hover || rating) ? "tomato" : "grey";
                const starStyle = {
                    color: color,
                    cursor: "pointer",
                    fontSize: "50px",
                }
                const inputStyle = {
                    display: "none"
                }
                return (
                    <label for="star">
                        <input type="radio" name="tar" value={num} style={inputStyle} />
                        <span
                            style={starStyle}
                            onMouseEnter={() => setHover(num)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(num)}
                        >*</span>
                    </label>
                )
            })}
        </div>
    )
}
export default StarRating;