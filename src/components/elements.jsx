import propsType from "prop-types";
const Element = ({ name, detail, image }) => {
    return (
        <div className="element">
            <span>
                <img src={image} alt="#"></img>
                <h2>{name}</h2>
                <p>{detail}</p>
            </span>
        </div>)
};
Element.propsType = {
    image: propsType.string,
    name: propsType.string,
    detail: propsType.image,
};
export default Element;