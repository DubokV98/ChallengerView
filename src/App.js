import PurposeComponent from './Components/Purposes/PurposeComponent';
import './App.css';
import { Route, Routes, Switch } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import NoPageComponent from './Components/NoPageComponent';
import MotorcycleComponent from './Components/Motorcycles/MotorcycleComponent';
import PurposeCreateComponent from './Components/Purposes/PurposeCreateComponent';
import Layout from './hoc/Layout';

function App() {
  return (
    <Layout>
      <div className='main-container'>
        <HeaderComponent />
        <div className="containter">

         <Routes>
            <Route path="/purposes" exact element={<PurposeComponent />} />
            <Route path="/purposes/create" element={<PurposeCreateComponent />} />
            <Route path="/purposes/update/:id" element={<PurposeCreateComponent />} />

            <Route path="/motorcycles" element={<MotorcycleComponent />} />
            <Route path="*" element={<NoPageComponent />} /> 
          </Routes> 

        </div>
        <FooterComponent />
      </div>
    </Layout>
  );
}

export default App;
