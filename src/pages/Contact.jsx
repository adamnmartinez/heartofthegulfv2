import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const reactSwal = withReactContent(Swal);

export default function ContactPage() {
  function messageAlert(event) {
    reactSwal.fire({
      title: "Message Sent!",
      html: "Thanks for using out form! We'll get back to you soon",
      confirmButtonText: <p className="confirmPrompt">OK</p>,
      confirmButtonColor: "rgb(210,86,86)",
    });
    event.preventDefault();
  }

  return (
    <div className="contactWrapper">
      <div className="contactBox">
        <p>
          <b>Send us a message!</b>
        </p>
        <div className="formContainer">
          <form className="contactForm" onSubmit={(e) => messageAlert(e)}>
            <div className="inputflex">
              <input
                className="left"
                type="text"
                placeholder="First"
                required
              ></input>
              <input type="text" placeholder="Last" required></input>
            </div>
            <div className="inputflex">
              <input
                className="left"
                type="text"
                placeholder="E-mail (optional)"
              ></input>
              <input type="text" placeholder="Phone (optional)"></input>
            </div>
            <textarea placeholder="Message" required></textarea> <br />
            <button className="submitContact" type="submit">
              {" "}
              SEND{" "}
            </button>
          </form>
        </div>
        {/* <div className="contactInfo">
          <div>
            Phone
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
            <br />
            info@heartofthegulf.com
          </div>
        </div> */}
      </div>
    </div>
  );
}
