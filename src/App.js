import './App.css';

const cards = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {
  
  return (
    <div className="App">
        {cards.map(card => {
          return <div  className="cards"><img src={card.src} alt="card"></img></div>
        })}
    </div>
  );
}

export default App;
