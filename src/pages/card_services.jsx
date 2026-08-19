function CardServices({serviceIcon, serviceTitle, serviceDescription}) {
    return(
        <div className="service-card">
            <div className="service-card-body">
                <i style={{ padding:'10px', fontSize:'30px', color:'#f5b21a' }} className={serviceIcon}></i>
                <h3>{serviceTitle}</h3>
                <p>{serviceDescription}</p>
                <div className="service-card-btns">
                    <button className="service-card-btn1">View Details</button>
                    <button className="service-card-btn2"><i className="fa-brands fa-whatsapp"></i> Chat Now</button>
            </div>
            </div>
        </div>
    )
}
export default CardServices