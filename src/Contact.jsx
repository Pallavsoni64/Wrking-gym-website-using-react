import React from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
    const contactForm =(e)=>{
e.preventDefault();
emailjs.sendForm('service_4aw58og', 'template_o4iygkp', e.target,'YE7We-SkeQWd6CCq1')
.then(response=>{
    alert('We will get back to you soon✌')
    .console.log(response);
}).catch(error=>{
    console.log('error');
})
    }
  return (
      <>
    <div className='contact' id='contactUs'>
        <h1 className="aboutHeading">Contact Us</h1>
        <div className='contactContainer'>
        <div className="contactForm">

        <form onSubmit={contactForm}>
            <div className="form1">
                <input type="text" name="name1" placeholder="Enter your Name" required/>
            </div>
           
            <div className="form1">
                <input type="text" name="number1" placeholder="Enter your Phone no." required/>
            </div>
            <div className="form1">
                <input type="text" name="email1" placeholder="Enter your Email id" required />
                </div>
            <div className="form1">
            <textarea name="msg" cols="60" rows='8' placeholder='Type your message here' required></textarea>
            </div>
            <button type="submit" className="btn" >Submit</button>
        </form>
        </div>
        

        </div>
        <hr />
        
    </div>
      </>
  )
}

export default Contact;
