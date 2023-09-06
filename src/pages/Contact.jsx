import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const reactSwal = withReactContent(Swal)

export default function ContactPage() {
  function messageAlert(event) {
    reactSwal.fire({
      title: 'Message Sent!',
      html: "Thanks for using out form! We'll get back to you soon",
      confirmButtonText: <p className="confirmPrompt">OK</p>,
      confirmButtonColor: "rgb(210,86,86)",
    })
    event.preventDefault()
  }

  return (
    <div>
      <div className="contactBox">
        Send us a message!
        <hr className="shortline" />
        <form className="contactForm" onSubmit={(e) => messageAlert(e)}>
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
