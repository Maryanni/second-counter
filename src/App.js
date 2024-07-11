import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App({seconds}) {
  const second = seconds.toString();
  const character = second.split('');

  
  return (
    <div className='cardGeneral'>
      <div className='container'>
        <div className='row'>
            {character.map((item, index) => {
              return <div className='col-4' key={index}>
                <Card character={item} />
              </div>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
