import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-main">

                <div className="footer-brand">
                    <img src="" alt="Ryantech Solutions" />

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
                        {/* google maps here */}
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

                    <p>
                        Copyright © 2012-2026 Ryantech Solutions Ltd.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
};
export default Footer