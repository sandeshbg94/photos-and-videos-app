import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import {MediaProvider} from './providers/MediaProvider';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default () => {
  return (
      <MediaProvider>
          <App/>
      </MediaProvider>
  );
};
