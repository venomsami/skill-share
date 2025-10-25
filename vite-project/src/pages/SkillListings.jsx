import React from "react";
import { Link } from "react-router-dom";

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
    image: "https://i.postimg.cc/90cK6b6w/guitar.jpg",
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
    image: "https://i.postimg.cc/qv9kPfjt/english.jpg",
    category: "Language"
  },
  {
    skillId: 3,
    skillName: "Basic Photography",
    providerName: "John Doe",
    providerEmail: "john@skillswap.com",
    price: 15,
    rating: 4.7,
    slotsAvailable: 4,
    description: "Learn camera basics and photo composition.",
    image: "https://i.postimg.cc/ZnggWm9J/photography.jpg",
    category: "Photography"
  },
  {
    skillId: 4,
    skillName: "Intro to Graphic Design",
    providerName: "Emily Rose",
    providerEmail: "emily@skillswap.com",
    price: 18,
    rating: 4.5,
    slotsAvailable: 2,
    description: "Start designing using Canva and Figma.",
    image: "https://i.postimg.cc/vHTbD8Kc/graphic-design.jpg",
    category: "Design"
  },
  {
    skillId: 5,
    skillName: "Python for Beginners",
    providerName: "Tom Lee",
    providerEmail: "tom@skillswap.com",
    price: 25,
    rating: 4.9,
    slotsAvailable: 6,
    description: "Understand the basics of Python programming.",
    image: "https://i.postimg.cc/gkZtgfXs/python.png",
    category: "Programming"
  },
  {
    skillId: 6,
    skillName: "Yoga for Wellness",
    providerName: "Maya Devi",
    providerEmail: "maya@skillswap.com",
    price: 12,
    rating: 4.8,
    slotsAvailable: 3,
    description: "Daily yoga sessions for balance and flexibility.",
    image: "https://i.postimg.cc/yxqpKP26/yoga.jpg",
    category: "Health"
  }
];

const SkillListings = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Popular Skills</h2>
      <div className="row">
        {skills.map(skill => (
          <div key={skill.skillId} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={skill.image}
                className="card-img-top"
                alt={skill.skillName}
                style={{ height: "180px", objectFit: "cover" }}
              />
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
