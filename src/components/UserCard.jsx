import { useState } from "react";

function UserCard({name,job,age,skills,isOnline}) {

    const [likes,setLikes] = useState(0);
    const [showSkills,setShowSkills]= useState(true);

    return (
        <div>
            <br />
            <h2>{`👤 ${name}`}</h2>

            <p>{`job: ${job}`}</p>
            <br />
            <p>{`age: ${age}`}</p>
            <br />
            <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
            <br />

                {showSkills && (
                    <div>
                    <p>Skills: </p>
                    <ul>
                        {skills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                    </div>
                )}

                <h4>❤️ Likes: {likes}</h4>


            <button onClick={() => setLikes(prev => prev + 1)}>[❤️ Like]</button>
            <p>{likes > 5 && "محبوبترین کاربر"}</p>
            <br />
            <button onClick={() => setShowSkills(!showSkills)}>[Hide Skills]</button>

        </div>
    );
}

export default UserCard;