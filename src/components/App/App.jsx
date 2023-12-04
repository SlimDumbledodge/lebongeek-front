import HeaderNav from '../HeaderNav/HeaderNav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

import 'semantic-ui-css/semantic.min.css';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
