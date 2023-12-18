import './App.css';
import Button from './components/Button';
import Immagine from './components/Immagine';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Button intro="sono il tasto cliccami, dunque" name="cliccami" />
        <Immagine src="https://esi.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MjAxMTE4MzMyNTI1NDg3OTkz/charizard_ex.jpg" />
        <Immagine src="https://i.etsystatic.com/8607787/r/il/d8493b/2567974717/il_570xN.2567974717_rhhj.jpg" />
        <Button intro="sono l'altro tasto cliccamiQUa quindi" name="cliccamiQua" />
      </div>
    </div>
  );
}

export default App;
