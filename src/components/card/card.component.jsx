import './card.styles.css';

const Card = ({ robot: { id, name, email } }) => {
    
        return (
            <div className='card-container' key={id}>
                        <img  
                            alt={`robot ${name}`} 
                            src={`https://robohash.org/${id}?set=set3&size=180x180`}
                        />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
        )
    }

export default Card;