import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// You should fetch real data; this is placeholder
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
    image: "https://i.postimg.cc/example1.png",
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
    image: "https://i.postimg.cc/example2.png",
    category: "Language"
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
    // Clear form etc. if you add form fields
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
          <input type="email" className="form-control" required defaultValue="" />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default SkillDetails;
