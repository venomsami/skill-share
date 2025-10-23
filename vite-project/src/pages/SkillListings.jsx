import React from "react";
import { Link } from "react-router-dom";

// Example static data (you’ll replace or extend this with JSON / fetch later)
const skills = [
  {
    skillId: 1,
    skillName: "Beginner Guitar Lessons",
    providerName: "Alex Martin",
    providerEmail: "alex@skillswap.com",
    price: 20,
    rating: 4.8,
    slotsAvailable: 3,
    description: "Acoustic guitar classes for complete beginners.",
    image: "https://i.postimg.cc/example1.png",
    category: "Music"
  },
  {
    skillId: 2,
    skillName: "Spoken English Practice",
    providerName: "Sara Hossain",
    providerEmail: "sara@skillswap.com",
    price: 10,
    rating: 4.6,
    slotsAvailable: 5,
    description: "Conversational English sessions for non-native speakers.",
    image: "https://i.postimg.cc/example2.png",
    category: "Language"
  }
  // Add more objects here...
];

const SkillListings = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Popular Skills</h2>
      <div className="row">
        {skills.map(skill => (
          <div key={skill.skillId} className="col-md-6 mb-4">
            <div className="card h-100">
              <img src={skill.image} className="card-img-top" alt={skill.skillName} />
              <div className="card-body">
                <h5 className="card-title">{skill.skillName}</h5>
                <p className="card-text">Rating: {skill.rating} ⭐</p>
                <p className="card-text">Price: ${skill.price}</p>
                <Link to={`/skill/${skill.skillId}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillListings;
