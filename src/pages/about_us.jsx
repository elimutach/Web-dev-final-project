import './about.css';

function AboutUs(){
    return(
        <div className="about">
            <div className="about-text" style={{margin: 'auto', padding: '20px'}}>
                <h1 style={{textAlign: 'center'}}>Ryantech Solutions</h1>
                <p style={{color:'gray', textAlign: 'center'}}>We don't just write code; we build the digital engines that power the future of your business.</p>
            </div>

            <div className="about-grid">
                <h2 style={{textAlign: 'center'}}>Our Featured Work</h2>
                <p style={{textAlign: 'center'}}>Explore some of the digital experiences we've crafted.</p>
                <div className="about-grid-cards">
                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>Website Development</h3>
                            <p>Custom websites and web applications built with modern technologies like React, Next.js, and WordPress.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>Software Development</h3>
                            <p>Scalable enterprise software solutions tailored to your business needs and workflow automation.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>Mobile App Development</h3>
                            <p>Native and cross-platform mobile apps built with Flutter and React Native for iOS and Android</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>CSS</h3>
                            <p>Styling and layout of web pages.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>Matplotlib</h3>
                            <p>Data visualization and plotting.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>Pandas</h3>
                            <p>Data manipulation and analysis.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>JavaScript</h3>
                            <p>Interactive web functionality and logic.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>HTML</h3>
                            <p>Structuring web pages and content.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>CSS</h3>
                            <p>Styling and layout of web pages.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-body">
                            <h3>HTML</h3>
                            <p>Structuring web pages and content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutUs