import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const authValue = useSelector(state => state.authReducer.isAuthenticated);

  return (
    <>
      <Header />
      {!authValue && <Auth />}
      {authValue && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
