import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Patient from './pages/Patient/index';
import Premium from './pages/Premium/index';
import Doctor from './pages/Doctors/index';
import Nurses from './pages/Nurses/index';
import Admin from './pages/Admin/index';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="patient" element={<Patient />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/nurses" element={<Nurses />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Layout>
  );
}

export default App;