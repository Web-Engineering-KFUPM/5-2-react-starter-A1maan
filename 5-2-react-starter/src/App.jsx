import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentCard name="Almaan Khan" studentId="202335270" dept="Computer Science" />
          <StudentCard name="John Doe" studentId="202335271" dept="Mathematics" />
        </div>
      </main>
    </div>
  )
}

export default App
