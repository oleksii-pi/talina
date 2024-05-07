import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
