
import "./ProfileComponent.css";

function ProfileComponent(props) {
    return <div className="card">
        <div className="coverPic">
        <img src={props.profileUrl} alt="" />
        </div>

        <div className="user-info">
            <h2>{props.name} <span>{props.age}</span></h2>
            <p>{props.city}</p>
        </div>

        <div className="stats">
        <div className="stat">
            <h2>{props.followers}</h2>
            <p>Followers</p>
        </div>

        <div className="stat">
            <h2>{props.likes}</h2>
            <p>Likes</p>
        </div>

        <div className="stat">
            <h2>{props.photos}</h2>
            <p>Photos</p>
        </div>
    
        </div>
    </div>
}

export default ProfileComponent;
