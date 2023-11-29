import { useLocation } from "react-router-dom";


const StudentCard = ({ student, children }) => {

    const location = useLocation();

    return (
        <div className="student-card">
            {children}
            {location.pathname === "/lectures" && (
                <p>{student.testimonial}</p>
            )}
            <div className="student-info">
                <img src={student.imgSrc} alt={student.name} />
                <div className="student-content">
                    <h5>{student.name}</h5>
                    <p>{student.role}</p>
                </div>
            </div>
            {location.pathname === "/topstudents" && (
                <p>{student.testimonial}</p>
            )}
        </div>
    )
}

export default StudentCard;
