import './ecommerce.css'
import ecommerce_img from '../assets/Ecommerce_img.jpeg'

function Ecommerce(){
    return(
        <div className='ecommerce'>
            <h1>E-Commerce Website</h1>

            <div className='ecommerce-content'>
                <div className='ecommerce-text'>
                    <h2>E-Commerce Website Package</h2>
                    <p> <span style={{ fontWeight: 'bold' }}>BEST FOR: </span> 
                        Businesses aiming to sell products online, manage inventory, and provide seamless e-commerce customer experiences.</p>
                    <ul className='ecommerce-list'>
                        <li>All Corporate Package features</li>
                        <li>Simple, easy-to-use website</li>
                        <li>Advanced e-commerce setup (product catalog, shopping cart, payment gateways)</li>
                        <li>MPESA & card payment integration</li>
                        <li>Product filtering & search</li>
                        <li>Inventory management system</li>
                        <li>Customer account management</li>
                        <li>Dynamic product pages</li>
                        <li>SEO optimized for products</li>
                        <li>Advanced chatbot</li>
                        <li>Knowledge base for customer support</li>
                        <li>3 months free support</li>
                        <li>Unlimited corporate emails</li>
                        <li>Unlimited revisions during development</li>
                        <li>Free annual domain & hosting</li>
                        <li>SSL-secured website</li>
                    </ul>
                    <button>
                        <i className="fa-brands fa-whatsapp"></i>
                        Talk to Us
                    </button>
                </div>

                <div className='ecommerce-img'>
                    <img src= {ecommerce_img} alt="Ecommerce Image" />
                </div>
            </div>
        </div>
    )
};
export default Ecommerce