import "./App.css";
import Header from "./components/Header";
import Villages from "./components/Villages"
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

      </div>
    </Router>
  );
}

export default App;
