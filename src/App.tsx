import { BrowserRouter } from 'react-router-dom';

import { routeTree } from '@/route';

function App() {
  return <BrowserRouter>{routeTree}</BrowserRouter>;
}

export default App;
