import './App.css';
import Expense from './component/Expense';
import Form from './component/Form';
import Income from './component/Income';
import Total from './component/Total';

function App() {
  return (
    <div className="App">
      <Form/>
      <Income/>
      <Expense/>
      <Total/>
    </div>
  );
}

export default App;
