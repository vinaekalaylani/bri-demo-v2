import { Route, Switch } from 'react-router-dom';

import AdsComp from './components/ads';
import HeaderComp from './components/header';

import Homepage from './pages/Homepage';
import Menu from './pages/Menu';
import Unit from './pages/Unit';

import Machine from './pages/Machine';
import Card from './pages/Card';
import Mobile from './pages/Mobile';

import Service from './pages/Service';
import Transfer from './pages/Transfer';
import ChangeCard from './pages/ChangeCard';
import Passbook from './pages/Passbook';
import Print from './pages/Print';
import Pin from './pages/Pin';
import Email from './pages/Email';
import Rekening from './pages/Rekening';
import Video from './pages/Video';
import BCafe from './pages/BCafe';
import BWork from './pages/BWork';
import Detail from './pages/Detail';

export default function App() {
  return (
    <div>
      <AdsComp/>
      <HeaderComp/>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        {/* MENU START */}
        <Route path="/menu">
          <Menu />
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
        <Route path="/rekening">
          <Rekening />
        </Route>
        <Route path="/change-card">
          <ChangeCard />
        </Route>
        <Route path="/passbook">
          <Passbook />
        </Route>
        <Route path="/pin">
          <Pin />
        </Route>
        <Route path="/print">
          <Print />
        </Route>
        <Route path="/email">
          <Email />
        </Route>
        <Route path="/transfer">
          <Transfer />
        </Route>

        <Route path="/video">
          <Video />
        </Route>
        {/* MENU END */}

        {/* UNIT START */}
        <Route path="/unit">
          <Unit />
        </Route>

        <Route path="/bri-cafe">
          <BCafe />
        </Route>
        <Route path="/bri-work">
          <BWork />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        {/* UNIT END */}
      </Switch>
    </div>
  );
};
