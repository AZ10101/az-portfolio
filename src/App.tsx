import { Header } from './components/Header'
import { ProjectList } from './components/ProjectList'
import { Profile } from './components/Profile'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProjectList />
      </main>
      <Profile />
      <footer className="footer">
        <p>© {new Date().getFullYear()} AZ</p>
      </footer>
    </div>
  )
}

export default App
