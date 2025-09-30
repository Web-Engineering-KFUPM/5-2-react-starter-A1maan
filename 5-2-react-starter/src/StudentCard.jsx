import './StudentCard.css';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>ID: {student.id}</p>
      <p>Department: {student.department}</p>
    </div>
  )
}

export default StudentCard;