// USESTATE
import { useState } from 'react';

// LAYOUTS
import Header from './Layout/Header/index';
import Main from './Layout/Main/index';
import Footer from './Layout/Footer/index';

// APP
function App() {
  // USESTATE
  const [selection, setSelectPage] = useState('Home');

  // RETURN
  return (
    <div className="home">
      <Header setSelectPage={setSelectPage} />
      <Main selection={selection} />
      <Footer />
    </div>
  );
}

export default App;
