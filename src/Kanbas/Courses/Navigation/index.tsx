import { useLocation, useParams } from "react-router";
import "./index.css";
import { courses } from "../../Database";
export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    
    return (

        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <a href={`#Kanbas/Courses/${cid}/${link}`}
                    className={`list-group-item border border-0 ${pathname.split("/")[4] === link ? "active" : "text-danger"}`}>{link}</a>
            ))}
        </div>
    )
}