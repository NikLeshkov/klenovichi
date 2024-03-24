import Footer from '../footer/Footer';
import Header from '../header/Header';
import Home from '../pages/Home/Home';
import Information from '../pages/Information/Information';
import News from '../pages/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Techniks from '../pages/Techniks/Techniks';
import BestCustomer from '../pages/BestCustomer/BestCustomer';
import Vacancies from '../pages/Vacancies/Vacancies';
import Achivments from '../pages/Achievements/Achivments';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="News" element={<News />} />
        <Route path="Information" element={<Information/>} />
        <Route path="Techniks" element={<Techniks/>} />
        <Route path="BestCustomer" element={<BestCustomer/>} />
        <Route path="Vacancies" element={<Vacancies/>} />
        <Route path="Achivments" element={<Achivments/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
