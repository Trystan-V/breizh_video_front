import "./App.css";
import Header from "./components/Header";
import Villages from "./components/Villages"
import Films from "./components/Films"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div>

        {/* menu navbar */}
        <Header />

        {/* route pour le villages */}

        <Route exact path="/Villages" component={Villages} />
        
        {/* route pour le film */}

        <Route exact path="/Film" component={Films}/>

      </div>
    </Router>
  );
}

export default App;
