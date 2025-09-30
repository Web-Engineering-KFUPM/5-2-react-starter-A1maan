import './StudentCard.css';

// StudentCard component displays individual student information
function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>Name: {props.name}</h3>
      <p>ID: {props.studentId}</p>
      <p>Department: {props.dept}</p>
    </div>
  )
}

export default StudentCard;