import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Floors from './components/floors/floors';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Treatments from './components/treatments/treatments';

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/vloeren' element={<Floors/>} />
          <Route path='/behandelingen' element={<Treatments/>} />
          <Route path='/over' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
// https://dev.to/salehmubashar/react-router-dom-36a2
// https://discover.hubpages.com/technology/React-Router-V6-The-Main-Changes
// https://github.com/react-bootstrap/react-router-bootstrap
export default App;

//<Route path='/hardevloeren' element={<HardFloors/>} />
//<Route path='/flexibelevloeren' element={<FlexFloors/>} />
//<Route path='/zachtevloeren' element={<SoftFloors/>} />

//<Route path='/exclusief' element={<Exclusive/>} />
//<Route path='/linoleum' element={<ExclusiveLinoleum/>} />
//<Route path='/pvc' element={<ExclusivePVC/>} />
//<Route path='/behandelingen' element={<Treatments/>} />

//<Route path='/behandelingena' element={<TreatmentA/>} />
//<Route path='/behandelingenb' element={<TreatmentB/>} />
//<Route path='/behandelingenc' element={<TreatmentC/>} />

/*
import HardFloors from './components/floors/hardfloors';
import SoftFloors from './components/floors/softfloors';
import FlexFloors from './components/floors/flexfloors';
import Exclusive from './components/exclusive/exclusive';
import ExclusiveLinoleum from './components/exclusive/exclusivelinoleum';
import ExclusivePVC from './components/exclusive/exclusivepvc';
import Treatments from './components/treatments/treatments';
import TreatmentA from './components/treatments/treatmenta';
import TreatmentB from './components/treatments/treatmentb';
import TreatmentC from './components/treatments/treatmentc';
*/