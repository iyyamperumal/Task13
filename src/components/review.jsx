import propTypes from "prop-types"
const Review = ({ image, name, review }) => {
    return (
        <div>
            <img src={image} alt="#" className="img2" />
            <h3>{name}</h3>
            <p>{review}</p>
        </div>
    )
};
Review.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    review: propTypes.string,
};

export default Review;