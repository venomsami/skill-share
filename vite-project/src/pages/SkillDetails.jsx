import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Matching skills from SkillListings.jsx
const skills = [
  {
    skillId: "1",
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
    skillId: "2",
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
    skillId: "3",
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
    skillId: "4",
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
    skillId: "5",
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
    skillId: "6",
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

const SkillDetails = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();
  const skill = skills.find(s => s.skillId === skillId);

  if (!skill) {
    return (
      <div className="container mt-5">
        <h2>Skill Not Found</h2>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleBookSession = (e) => {
    e.preventDefault();
    alert("Booking successful!");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{skill.skillName}</h2>
      <img src={skill.image} className="img-fluid mb-4" alt={skill.skillName} />
      <p><strong>Provider:</strong> {skill.providerName} ({skill.providerEmail})</p>
      <p><strong>Category:</strong> {skill.category}</p>
      <p><strong>Description:</strong> {skill.description}</p>
      <p><strong>Rating:</strong> {skill.rating} ⭐</p>
      <p><strong>Price:</strong> ${skill.price}</p>
      <p><strong>Slots Available:</strong> {skill.slotsAvailable}</p>

      <h4 className="mt-4">Book Session</h4>
      <form onSubmit={handleBookSession}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default SkillDetails;
