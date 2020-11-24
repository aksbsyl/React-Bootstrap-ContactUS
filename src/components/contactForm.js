import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "gmail_template",
        e.target,
        "user_oM2QDYougMk5DoQ3dsLTo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container border">        
        <div className="ApplyForm m-4">
          <div className="container">
            <div className="bg-light ApplyForm-header m-5">
              <h2 className="text-dark  p-2 text-center">Contact Us</h2>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="row pt-3 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                pattern="(?=.*\s)(?=.*[a-z])(?=.*[A-Z]).{5,}"
                minlength="5"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                pattern=".{13,}"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{25,}"
                minlength="25"
                required
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
          <br></br>
        </form>
      </div>
      <div>
        <div className="col-5 form-group mx-auto">
          <h2 className="text-secondary p-2 text-center">
            Find Us at Google Maps
          </h2>
        </div>
        <iframe
          class="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14136.726492820946!2d83.5714745790661!3d27.649851925050264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996826fb7c251fb%3A0x82a2ef09f7cb7e8d!2sShitalnagar%2C%20Devdaha%20Municipality%2032900!5e0!3m2!1sen!2snp!4v1605190504153!5m2!1sen!2snp"
          width="350"
          height="350"
          frameborder="0"
          // aria-hidden="false"
          // tabindex="0"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  );
}
