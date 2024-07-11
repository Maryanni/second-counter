import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App(props) {
  let cards = [
    {
      id: 1,
      text: "card 1",
    },
    {
      id: 2,
      text: "card 2",
    },
    {
      id: 3,
      text: "card 3",
    }
  ]
  return (
    <div className='cardGeneral'>
      <div className='container'>
        <div className='row'>
          <div>
            <Card />
          </div>
          <div>
            {cards.map(item => {
              return <div className='col-4'>
                <Card x={props.seconds} />
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
