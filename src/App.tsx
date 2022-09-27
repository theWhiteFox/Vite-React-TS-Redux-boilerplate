import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound';
import { store } from './store';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
