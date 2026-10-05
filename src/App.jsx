import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Programs from './components/Programs.jsx'
import Features from './components/Features.jsx'
import Community from './components/Community.jsx'
import Showcase from './components/Showcase.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="content">
        <Hero />
        <AnnouncementBar />
        <Programs />
        <Features />
        <Showcase />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
