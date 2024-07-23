import propTypes from "prop-types";

const Topbottom = ({ type, value }) => {
    return (
        <div className={type}>
            <h1>{value}</h1>
            <input className="email" type="email" required placeholder="Email Address"></input>
            <button className="btn">Submit</button>
        </div>
    )
};
Topbottom.propTypes = {
    value: propTypes.string,
    type: propTypes.string,
}

export default Topbottom;