import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div>
        <h3>Visit Our Store</h3>
        <p>45 XXXX st.</p>
        <p>X City, XC</p>
        <p>(111) 222 - 333</p>
        <p>Monday-Friday: 9:00-8:00</p>
        <p>Saturday: 10:00-7:00</p>
        <p>Sunday: 10:00-6:00</p>
      </div>
      <div>
        <h3>Contact With us</h3>
        <ul className="contactIcons">
          <li>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-twitter fab"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-at"></i>{" "}
            </a>
          </li>
          <li>
            <a href="tel:555-555-5555">
              <i className="fas fa-mobile-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
