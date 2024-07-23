import propTypes from "prop-types"


const Picturedetail = ({ image, name, description, id }) => {

    if (id === "1") {
        return (
            <div className="detail">
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <img src={image} alt="#" className="img1" />
            </div>
        )
    }
    if (id === "2") {
        return (
            <div className="extra" >
                <img src={image} alt="#" className="img1" />
                <div><h2>{name}</h2>
                    <p>{description}</p></div>


            </div>
        )
    }
};
Picturedetail.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    description: propTypes.string,
};
export default Picturedetail;