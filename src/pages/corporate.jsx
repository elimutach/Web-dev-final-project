import corporate_img from '../assets/tucode_pic2.png';
import './corporate.css';

function CorporateTraining(){
    return(
        <div className="corporate">
            <div className="corporate-grid">
                <div className="corporate-text" style={{margin: 'auto', padding: '20px'}}>
                    <h1>Turn Your Team into
                    <br />
                    Tech Champions</h1>
                    <p style={{color:'gray'}}>At Ryantech Solutions, we turn everyday staff, HR, Admin, Procurement, Finance, Marketing, Operations, Sales, and IT, into data and digital champions through practical, hands-on training in today’s leading digital, analytical, and technological skills. From Power BI, Tableau, Advanced Excel, AI, Python, automation, to digital literacy and cybersecurity, we equip teams with the tools that enhance productivity, decision-making, and workplace resilience.</p>
                </div>
                <div className="corporate-image">
                    <img src={corporate_img} alt="Corporate Image" />
                </div>
                <div className="corporate-buttons">
                    <button className="view-btn">view next workshop</button>
                    <button className="whatsapp-btn">Whatsapp Us</button>
                </div>
            </div>
        </div>
    )
}
export default CorporateTraining