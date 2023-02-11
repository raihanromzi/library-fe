import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/routes.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes key={'route'}>
        {routes.map((val, key) => {
          return <Route exact path={val.path} element={val.element} key={key} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
