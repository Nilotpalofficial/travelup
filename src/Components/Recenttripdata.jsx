import "./Recenttripstyles.css";

function TripData(props){
    return (
        <div className="t-card">
            <div className="t-img">
                <img src={props.img} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.txt}</p>
        </div>
    );
}

export default TripData;