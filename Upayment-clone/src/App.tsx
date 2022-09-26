import './App.css';
import Filter from './features/user/Filter';
import { UserView } from './features/user/UserView';

function App() {
  return (
    <div className='App'>
      <Filter/>
      <UserView />
    </div>
  );
}

export default App;
