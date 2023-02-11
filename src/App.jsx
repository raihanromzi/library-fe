import './App.css';

import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';

export default function App() {
  console.log(routes);

  return (
    <Routes key={'route'}>
      {routes.map((val, key) => {
        return <Route exact path={val.path} element={val.element} key={key} />;
      })}
    </Routes>
  );
}
