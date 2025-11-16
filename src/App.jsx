import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Stories from './pages/Stories.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

import AdminPublish from './components/AdminPublish';
import AdminAddStory from "./pages/AdminAddStory.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import StoryDetails from './pages/StoryDetails.jsx';

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stories" element={<Stories />} />

          {/* dynamic stories */} 
          <Route path="/stories/:slug" element={<StoryDetails />} />

          <Route path="/contact" element={<Contact />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminPublish />} />
          <Route path="/admin/add-story" element={<AdminAddStory />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* 404 last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
