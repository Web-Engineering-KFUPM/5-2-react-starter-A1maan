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
          <StudentCard student={{ name: "Almaan Khan", id: 202335270, department: "Computer Science" }} />
          <StudentCard student={{ name: "John Doe", id: 202335271, department: "Mathematics" }} />
        </div>
      </main>
    </div>
  )
}

export default App
