import './bizna.css';
import bizna_img from '../assets/Bizna_img.jpeg';

function BiznaStarter(){
    return(
        <div className='bizna'>
            <h1>Bizna Starter Package</h1>

            <div className='bizna-content'>
                <div className='bizna-text'>
                    <h2>Bizna Starter Package</h2>
                    <p> <span style={{ fontWeight: 'bold' }}>BEST FOR: </span> 
                        Start-ups and small businesses wanting an affordable, simple, professional website to establish an online presence.</p>
                    <ul className='bizna-list'>
                        <li>Simple, easy-to-use website</li>
                        <li>Mobile & tablet optimized</li>
                        <li>Custom & dynamic design features</li>
                        <li>Basic chatbot integration</li>
                        <li>Social media integration</li>
                        <li>Unlimited revisions during development</li>
                        <li>3 months free support</li>
                        <li>Unlimited corporate emails</li>
                        <li>FREE domain & hosting</li>
                    </ul>
                    <button>
                        <i className="fa-brands fa-whatsapp"></i>
                        Talk to Us
                    </button>
                </div>

                <div className='bizna-img'>
                    <img src= {bizna_img} alt="Bizna Image" />
                </div>
            </div>
        </div>
    )
};
export default BiznaStarter