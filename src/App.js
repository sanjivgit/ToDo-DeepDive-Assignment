import { AppContainer } from './app.style';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
