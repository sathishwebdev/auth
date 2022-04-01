import routes from './models/routeModel';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>

{/* list routes from routeModel */}

      <Route exact path="/" element={<Navigate to="/login" replace/>}/>
      {
        routes.map(({name, path, element} , id)=>(
          <Route 
            key={id} 
            exact 
            path={`/${path}`} 
            element={
              !element 
                ? <div className="App-header">{name}</div> 
                : element } 
          />
        ))
      }
    </Routes>
  </BrowserRouter>
  );
}

export default App;
