import './contact.css';

function ContactUs(){
    return(
        <div className="contact">
            <div className="contact-text" style={{margin: 'auto', padding: '20px'}}>
                <h1>Contact Us</h1>
                <p style={{padding: '10px', color:'gray'}}>Ready to start your digital transformation? Reach out to us for quotes, support, or general inquiries.</p>
            </div>
            <div className="contact-grid">
                <div className="contact-grid1">
                    <div className="contact-grid1-text">
                        <h2>General Inquiries</h2>
                        <p>For general questions about our services, pricing, or to schedule a meeting, please use the contact details below.</p>
                    </div>
                    <div className="contact-grid1-cards">
                        <div className="contact-grid1-card">
                            <i className="fa-solid fa-phone"></i>
                            <h3>Call Us</h3>
                            <p>+254 720 475 664</p>
                        </div>
                        <div className="contact-grid1-card">
                            <i className="fa-brands fa-whatsapp"></i>
                            <h3>Whatsapp</h3>
                            <p>+254 720 475 664</p>
                        </div>
                        <div className="contact-grid1-card">
                            <i className="fa-solid fa-envelope"></i>
                            <h3>Email</h3>
                            <p>info@ryantech.co.ke</p>
                        </div>
                        <div className="contact-grid1-card">
                            <i className="fa-solid fa-map-marker-alt"></i>
                            <h3>Visit Us</h3>
                            <p>Luther Plaza, Nyerere Rd, Nairobi</p>
                        </div>
                    </div>
                </div>
                <div className="contact-grid2">
                    <div className="department-card">
                        <h2>Specific Departments</h2>
                        <p>
                            Direct your inquiry to the right team for a faster response.
                        </p>
                        <div className="department-row">
                            <strong>Quotes: </strong>
                            <span>info@ryantech.co.ke</span>
                        </div>
                        <div className="department-row">
                            <strong>Technical Support: </strong>
                            <span>dev@ryantech.co.ke</span>
                        </div>
                        <div className="department-row">
                            <strong>Careers: </strong>
                            <span>info@ryantech.co.ke</span>
                        </div>
                    </div>
                    <div className="steps-card">
                        <h2>What Happens Next?</h2>

                        <div className="step">
                            <i className="fa-solid fa-comments"></i>
                            <div>
                                <h3>1. Consultation</h3>
                                <p>We discuss your requirements and business goals.</p>
                            </div>
                        </div>

                        <div className="step">
                            <i className="fa-solid fa-file"></i>
                            <div>
                                <h3>2. Proposal</h3>
                                <p>We send a detailed plan, timeline, and quote.</p>
                            </div>
                        </div>

                        <div className="step">
                            <i className="fa-solid fa-rocket"></i>
                            <div>
                                <h3>3. Kickoff</h3>
                                <p>Once approved, we start building your solution immediately.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs