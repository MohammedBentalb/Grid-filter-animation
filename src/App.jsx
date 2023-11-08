import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './Components/NotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Grid-filter-animation/" index element={<Home />} />
        <Route path="/Grid-filter-animation/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
