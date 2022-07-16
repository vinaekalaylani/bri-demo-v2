import { Route, Switch } from 'react-router-dom'
import AdsComp from './components/ads';
import HeaderComp from './components/header';
import Card from './pages/Card';
import Homepage from './pages/Homepage';
import Machine from './pages/Machine';
import Menu from './pages/Menu';
import Mobile from './pages/Mobile';
import Service from './pages/Service';
import Unit from './pages/Unit';
import Video from './pages/Video';

export default function App() {
  return (
    <div>
      <AdsComp/>
      <HeaderComp/>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/unit">
          <Unit />
        </Route>
        <Route path="/machine">
          <Machine />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/mobile">
          <Mobile />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
      </Switch>
    </div>
  );
};
