import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListingPage from './components/JobListingPage';
import JobDetailsPage from './components/JobDetailsPage';
import CVUploadPage from './components/CVUploadPage';
import AdminPage from './components/AdminPage';
import UserLogin from "./components/AdminLogin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobListingPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        {/* <Route path="/upload-cv" element={<CVUploadPage />} /> */}
       <Route path="/apply/:id" element={<CVUploadPage />} />
       <Route path="/login" element={<UserLogin />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </Router>
  );
}

export default App;
