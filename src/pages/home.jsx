import './home.css';
import home_img from '../assets/tucode_pic1.webp';
import Card from '../card';
import CardServices from './card_services';

function Home({icon, cardTitle, cardDescription, serviceIcon, serviceTitle, serviceDescription}){
    return(
        <div className="container">
            <div className="home">
                <section className='hero'>
                    <div className='hero-overlay'>
                        <div className='hero-content'>
                            <h2>RYANTECH SOLUTIONS</h2>
                            <h1>Web Development Services</h1>
                            <p>Custom websites and web applications built with modern technology</p>
                            <div className='hero-btns'>
                                <a href="#services">
                                    <button className='hero-btn1'>Explore Services</button>
                                </a>
                                <button className='hero-btn2'><i className="fa-brands fa-whatsapp"></i> Get a quote</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="short-about">
                    <div className="home-text">
                        <h1>
                            Driving Impact with <span>Data & ICT</span>
                            <br />
                            <span>since 2012</span>
                        </h1>
                        <p>Ryantech Solutions focuses on software and web application development, ICT consulting, and BPO services in AI-powered MIS, workflow automation, and digital process optimization.</p>
                        <p>We also offer Corporate ICT Training, equipping teams with practical skills in data analytics, automation, AI, digital design, and data collection.</p>
                        <p>Through our youth ICT bootcamps, we enhance employability, innovation, and digital entrepreneurship.</p>
                    </div>
                    <div className="home-image">
                        <img src={home_img} alt="Home Image" />
                    </div>
                    <div className="cards">

                        <Card 
                            icon="fa-solid fa-desktop"
                            cardTitle="Software Development"
                            cardDescription="Modern Website / Mobile App / POS etc."
                        />

                        <Card
                            icon="fa-solid fa-user-tie"
                            cardTitle="Corporate Training"
                            cardDescription="Data Analytics & Digital Skills"
                        />

                        <Card 
                            icon="fa-solid fa-code"
                            cardTitle="Youth Bootcamps"
                            cardDescription="Employability & Innovation"
                        />

                    </div>
                </div>
                <div id='services' className="services">
                    <div className="services-part">
                        <h2 style={{textAlign: 'center'}}>Our Services</h2>
                        <p style={{textAlign: 'center'}}>Comprehensive digital solutions to transform your business</p>
                    </div>
                    <div className="services-grid">
                        <CardServices 
                            serviceIcon="fa-solid fa-code"
                            serviceTitle="Software Development"
                            serviceDescription="Scalable enterprise software solutions tailored to your business needs and workflow automation."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-laptop"
                            serviceTitle="Website Development"
                            serviceDescription="Custom websites and web applications built with modern technologies like React, Next.js, and WordPress."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-mobile"
                            serviceTitle="Mobile App Development"
                            serviceDescription="Native and cross-platform mobile apps built with Flutter and React Native for iOS and Android."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-chart-line"
                            serviceTitle="Digital Marketing"
                            serviceDescription="SEO, social media marketing, and online brand building to grow your digital presence."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-headset"
                            serviceTitle="IT Support & Consultancy"
                            serviceDescription="24/7 managed IT services, network support, and technology consulting for businesses."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-chalkboard-teacher"
                            serviceTitle="Corporate ICT Training"
                            serviceDescription="Professional training in data analytics, automation, AI, and digital skills for teams."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-server"
                            serviceTitle="Web Hosting"
                            serviceDescription="Reliable cloud hosting with 99.9% uptime, free SSL certificates, and 24/7 support."
                        />
                        <CardServices 
                            serviceIcon="fa-solid fa-globe"
                            serviceTitle="Domain Registration"
                            serviceDescription="Secure and affordable domain registration for your online presence."
                        />

                        <CardServices 
                            serviceIcon="fa-solid fa-sms"
                            serviceTitle="Bulk SMS Services"
                            serviceDescription="Mass messaging platform with 98% delivery rates and real-time campaign analytics."
                        />
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Home