import standard_img from '../assets/standard_biz_img.jpeg'
import './standard_biz.css'

function StandardBiz(){
    return(
        <div className='standard-biz'>
            <h1>Standard Biz Package</h1>
            <div className='standard-biz-content'>
                <div className='standard-biz-text'>
                    <h2>Standard Biz Package</h2>
                    <p> <span style={{fontWeight:'bold'}}> BEST FOR </span>
                    : Small or growing businesses needing a professional website with advanced tools, knowledge base, and chatbot integration.
                    </p>
                    <ul className='standard-biz-list'>
                        <li>All features in Bizna Starter Package</li>
                        <li>Basic chatbot</li>
                        <li>Social media integration</li>
                        <li>CMS integration</li>
                        <li>Knowledge base for FAQs & resources</li>
                        <li>Unlimited revisions during development</li>
                        <li>6 months free support</li>
                        <li>Unlimited corporate emails</li>
                        <li>FREE domain & hosting</li>
                        <li>SSL-secured website</li>
                    </ul>
                    <button>
                        <i className="fa-brands fa-whatsapp"></i>
                        Talk to Us
                    </button>
                </div>
                <div className="standard-img">
                    <img src={standard_img} alt="Standard Biz Image" />
                </div>
            </div>
        </div>
    )
};
export default StandardBiz