import React from 'react';
import contactImage from '../Assets/contact.jpg';
import '../Styles/Contact.css';
const Contact = () => {
    const mobileNumber = "+1234567890";
    const emailAddress = "example@example.com";

    const handleSendMessage = () => {
        window.open(`sms:${mobileNumber}`, '_blank');
    };

    const handleSendMail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div className="contact-container">
            <h1 style={{color:'purple'}}>Contact Me</h1>
            <img src={contactImage} alt="Contact" className="contact-image" />
            <p>Feel free to reach out to me for any inquiries or collaborations.</p>
            <div className="contact-buttons">
                <button onClick={handleSendMessage}>Send Message</button>
                <button onClick={handleSendMail}>Send Mail</button>
            </div>
        </div>
    );
}

export default Contact;