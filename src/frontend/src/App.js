import './App.css';
import { TeamPage } from './pages/TeamPage';
import {BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      
        <Route path="/teams/:teamName" component={TeamPage} >
          
        </Route>
      
    </div>
    </Router>
  );
}

export default App;
