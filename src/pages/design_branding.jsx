import design_branding_img from '../assets/design_branding_img.png'
import './design.css'

function DesignAndBranding(){
    return(
        <div className="design">
            <h1>Package for design and branding</h1>
            <div className='design-content'>
                <div className='design-text'>
                    <h2>Ryantech Branding</h2>
                    <p>
                        <span style={{color:'lightyellow'}}>Conceptualize.</span>  
                        <span style={{color:'lightgreen'}}>Brand.</span>  
                        <span style={{color:'lightblue'}}>Elevate.</span>
                    </p>
                    <p style={{fontFamily:'cursive'}}>Crafting Your Tomorrow's Identity Today</p>
                </div>
                <div className='design-contact'>
                    <div className='social-icons'>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="#">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <p>Ryantech Solutions</p>
                    </div>
                    <div className='contact-info'>
                        <i className="fa-solid fa-mobile"></i>
                        <p>Phone Number: +254 720 475664</p>
                        <i className="fa-solid fa-globe"></i>
                        <a 
                        href="https://ryantech.co.ke/"
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Website
                        </a>
                    </div>
                </div>
            </div>
            <div className="design-img">
                <img src={design_branding_img} alt="Design and Branding Image" />
            </div>
        </div>
    )
};
export default DesignAndBranding