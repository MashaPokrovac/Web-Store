import React from "react";
import contactImage from "./contact-img.jpg";

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <img src={contactImage} alt="about_img"></img>
      <div className="aboutStory">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut vulputate eros magna, ac commodo enim sagittis
          in.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut vulputate eros magna, ac commodo enim sagittis
          in. Proin iaculis orci eu augue aliquet viverra.
          Pellentesque at tincidunt sem, ac tincidunt augue.
          Donec eget erat finibus, tempus ex quis, porttitor sem.
          Fusce in nulla eu tortor mollis elementum nec et risus.
          Proin in faucibus lectus, ac posuere nisl. Sed finibus
          facilisis leo, nec congue tortor varius eget.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut vulputate eros magna, ac commodo enim sagittis
          in. Proin iaculis orci eu augue aliquet viverra.
          Pellentesque at tincidunt sem, ac tincidunt augue.
          Donec eget erat finibus, tempus ex quis, porttitor sem.
        </p>
      </div>
    </div>
  );
}

export default About;
