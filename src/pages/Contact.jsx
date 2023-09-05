import { useState } from "react";

export default function ContactPage() {
  function messageAlert() {
    alert(
      "Message sent, thanks for using out form! We'll get back to you soon",
    );
  }

  return (
    <div>
      <div className="contactBox">
        Send us a message!
        <hr className="shortline" />
        <form className="contactForm" onSubmit={messageAlert}>
          <input type="text" placeholder="First" required></input>
          <input type="text" placeholder="Last" required></input>
          <br />
          <input type="text" placeholder="E-mail (optional)"></input>
          <input type="text" placeholder="Phone (optional)"></input>
          <br />
          <textarea placeholder="Message" required></textarea>
          <br />
          <button className="submitContact" type="submit">
            {" "}
            SEND{" "}
          </button>
        </form>
        <hr className="shortline" />
        <div className="contactInfo">
          <div>
            Phone
            <hr />
            <br />
            Culver City: (310) 800-9967
            <br />
            Los Angeles: (323) 222-8918
            <br />
            Santa Cruz: (831) 370-7051
            <br />
          </div>
          <div>
            Email
            <hr />
            <br />
            info@heartofthegulf.com
          </div>
        </div>
      </div>
    </div>
  );
}
