import React from "react";
import emailjs from 'emailjs-com'
const Form = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_t04f87n', 'template_hl60tlt', e.target,'YE7We-SkeQWd6CCq1')
            .then(response => {
              alert('Thank you for your interest😍\nWe will get back to you soon🙌')
                console.log('SUCCESS!');
            }).catch(error => {
                console.log('FAILED...');
            });
    }
    return (
        <form onSubmit={sendEmail}>
            <div className="form">
                <input type="text" name="name" placeholder="Enter your Name" required/>
            </div>
            <div className="form">
                <input type="text" name="locality" placeholder="Enter your Locality" required/>
            </div>
            <div className="form">
                <input type="text" name="goal" placeholder="Enter your Goal" required />
            </div>
            <div className="form">
                <input type="text" name="number" placeholder="Enter your Phone no." required/>
            </div>
            <div className="form">
                <input type="text" name="email" placeholder="Enter your Email id" required />
            </div>
            <button type="submit" className="btn" id="button">Submit</button>
        </form>

    )
}
export default Form;