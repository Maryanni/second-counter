import { isVisible } from "@testing-library/user-event/dist/utils";

function Card({ character }) {
    return (
            <div className="card">
                <div className="card-body cardIndividual" style={{ display: isVisible ? 'block' : 'none', padding: '9px', margin: '5px', width: '60px' }}>
                    <h1 className="card-title character">{ character }</h1>
                </div>
            </div>
      
    );
}

export default Card;