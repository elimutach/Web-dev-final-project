function Card({ icon, cardTitle, cardDescription }) {
    return (
        <div className='card'>
            <div className='card-details'>
                <i style={{ padding:'10px', fontSize:'30px', color:'#f5b21a' }} className={icon}></i>
                <h3>{cardTitle}</h3>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
}

export default Card;