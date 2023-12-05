import 'semantic-ui-css/semantic.min.css';

import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';
import Ads from '../Ads/Ads';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
