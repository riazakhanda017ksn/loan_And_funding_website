import React from "react";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react/cjs/react.development";
import TeamShowDetails from "../TeamShowDetails/TeamShowDetails";
import "./Team.css";
const Team = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/addMember")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  });

  return (
    <section class="expart-parts">
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="team-management text-center">
              <h6>Expert People</h6>
              <h2>Global leadership team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
      <div class="row px-4">
      {experts.map((expert) => (
        <TeamShowDetails teamDetails={expert}></TeamShowDetails>
      ))}
      </div>
    </section>
  );
};

export default Team;
