import { isVisible } from "@testing-library/user-event/dist/utils";

function Card(props) {
    return (
            <div className="card">
                <div className="card-body cardIndividual" style={{ display: isVisible ? 'block' : 'none', border: '1px solid #000', padding: '10px', margin: '10px', width: '60px' }}>
                    <h1 className="card-title">{props.x}</h1>
                </div>
            </div>
      
    );
}

export default Card;