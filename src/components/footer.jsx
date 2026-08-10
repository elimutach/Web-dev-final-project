import ryantech_pic from '../assets/ryantech_logo.png'
import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-main">

                <div className="footer-brand">
                    <img src={ryantech_pic} alt="Ryantech Solutions" />

                    <p>
                        Driving Impact with
                        <br />
                        <strong>Data & ICT</strong>
                    </p>

                    <button>Company Profile ▼</button>
                </div>

                <div className="footer-company">
                    <h3>Company</h3>

                    <p>
                        Ryantech Solutions provides corporate ICT training in data analytics, automation, AI, and digital design, and also offers software development, ICT consulting, and BPO services in AI-powered MIS and workflow automation.
                    </p>

                    <h3>Tu-Code Academy</h3>

                    <p>
                        Tu-Code is a coding and software development training program powered by Ryantech Solutions Ltd., offering practical, industry-ready skills built in Kenya for real-world development.
                    </p>

                    <button>Learn More</button>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <h4>Software Development</h4>
                    <a href="#">Software Solutions</a>
                    <a href="#">naSoma LMS</a>
                    <a href="#">Web Design Packages</a>

                    <h4>Data & Analytics Training</h4>
                    <a href="#">Our Courses</a>
                    <a href="#">2026 Training Calender</a>
                    <a href="#">Become an Instructor</a>

                    <h4>Quick Links</h4>
                    <a href="#">Youth Bootcamps ▼</a>
                </div>

                <div className="footer-office">
                    <h3>Office Location ▼</h3>

                    <h4>Ryantech Solutions Ltd.</h4>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>Office:</strong>
                        Ground Flr. Luther Plaza, 
                        Nyerere Road, Nairobi, Kenya.
                    </p>

                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong>WhatsApp/Call:</strong>
                        +254 720 475 664
                    </p>

                    <p>
                        <i className="fa-solid fa-envelope"></i>
                        <strong> Email:</strong>
                        info@ryantech.co.ke
                    </p>

                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.638166811631!2d36.81212597509412!3d-1.2823434987054712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47f886b273c7%3A0x18af649015b002b9!2sRyantech%20Solutions!5e0!3m2!1sen!2ske!4v1786352813554!5m2!1sen!2ske" 
                            width="600" 
                            height="450" 
                            style={{border:0}} 
                            allowfullscreen
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="social-icon">
                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <p>
                        Copyright © 2012-2026 Ryantech Solutions Ltd.
                        All rights reserved.
                </p>
            </div>
        </footer>
    )
};
export default Footer