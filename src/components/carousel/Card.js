import "./Card.css";

const Card = ({ data, index, setIndex }) => {
    const handleRight = i => {
        if (i === data.length - 1) setIndex(0);
        else setIndex(i + 1);
    }

    const handleLeft = i => {
        if (i === 0) setIndex(data.length - 1);
        else setIndex(i - 1);
    }

    return (
        <div className="card-container">
            {data.map(({ id, title, text }, i) => (
                <div key={id} className={i === index ? "active" : "inactive"}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            ))}
            <div>
                <button onClick={() => handleLeft(index)}> left </button>
                <button onClick={() => handleRight(index)}> right </button>
            </div>
        </div>
    )
}

export default Card;