import React from "react";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to <span className="text-primary">SkillSwap</span>! 👋
        </h1>
        <p className="lead text-muted">
          A local platform to share, learn, and exchange skills with others.
        </p>
        <p className="mt-4">
          <a href="/skills" className="btn btn-primary btn-lg">
            Browse Skills
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
