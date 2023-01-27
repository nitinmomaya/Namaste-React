import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is about from paragraph!!!!!!!!!</p>
      <Outlet />
    </div>
  );
};

export default About;
