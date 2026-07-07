import "./BusinessCard.css";

export function BusinessCard(props) {
    const {name, description, interests, linkedin, twitter} = props;
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            
            <h3>Interests</h3>

            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>   
                ))}
            </ul>
            <div className="social-links">
                <a className="social-link" href={linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
            
                <a className="social-link" href={twitter} target="_blank" rel="noopener noreferrer">twitter</a>
            </div>
        </div>
    );
}