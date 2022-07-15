import { Route, Switch } from 'react-router-dom'
import AdsComp from './components/ads';
import HeaderComp from './components/header';
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <div>
      <AdsComp/>
      <HeaderComp/>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};
