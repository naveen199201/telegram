import { useAuth0 } from "@auth0/auth0-react";
import MainPage from './MainPage';
import LoginButton from './Login';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated && (
      <MainPage />
    )}
      {!isAuthenticated && (<LoginButton />)}
    </div>
  );
}

export default App;
