import './corporate_biz.css'
import corporate_biz_img from '../assets/Corporate_biz_img.jpeg'

function CorporateBiz(){
    return(
        <div className='corporate-biz'>
            <h1>Corporate Package</h1>

            <div className='corporate-biz-content'>
                <div className='corporate-biz-text'>
                    <h2>Corporate Package</h2>
                    <p> <span style={{ fontWeight: 'bold' }}>BEST FOR: </span> 
                        Medium to large businesses, associations, or online retailers needing advanced website, SEO, and chatbot features.</p>
                    <ul className='corporate-biz-list'>
                        <li>Simple, easy-to-use website</li>
                        <li>Fully customized website design</li>
                        <li>Mobile & tablet optimized</li>
                        <li>Dynamic & responsive website design</li>
                        <li>Advanced chatbot</li>
                        <li>Social media integration</li>
                        <li>CMS integration & knowledge base</li>
                        <li>Full SEO optimization & Google ranking feature</li>
                        <li>Google Analytics & Google Reviews integration</li>
                        <li>Unlimited revisions during development</li>
                        <li>6 months free support</li>
                        <li>Unlimited corporate emails</li>
                        <li>Keyword search feature</li>
                        <li>MPESA integration</li>
                        <li>Free annual domain & hosting</li>
                        <li>SSL-secured website</li>
                    </ul>
                    <button>
                        <i className="fa-brands fa-whatsapp"></i>
                        Talk to Us
                    </button>
                </div>

                <div className='corporate-biz-img'>
                    <img src= {corporate_biz_img} alt="Corporate Package Image" />
                </div>
            </div>
        </div>
    )
};
export default CorporateBiz