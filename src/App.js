import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Icon from './components/Icon';

function App({ seconds }) {
  const second = seconds.toString();
  const character = second.split('');


  while (character.length < 6) {
    character.unshift('0');
  }
  return (
    <div className='cardGeneral'>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Icon />
          </div>
          {character.map((item, index) => {
            return <div className='col' key={index}>
              <Card character={item} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
