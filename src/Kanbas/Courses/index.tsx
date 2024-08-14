import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "./Grades";
import { useEffect, useState } from "react";
import * as client from "./Assignments/client";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid , aid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);

    // const [assignments, setAssignments] = useState<any[]>([]);
    // const [assignment, setAssignment] = useState<any>({
    //     _id: "1234", name: "New Assignment", description: "New Assignment Description",
    //     points: "100", dueDate: "2023-12-15", availableDate: "2023-12-15", untilDate: "2023-12-15"
    // });

    // const updateAssignment= async () => {
    //     await client.updateAssignment(assignment);
    //     setAssignments(
    //         assignments.map((a) => {
    //             if (a._id === assignment._id) {
    //                 return assignment;
    //             } else {
    //                 return a;
    //             }
    //         })
    //     );
    // };
    
    // const deleteAssignment = async (assignmentId: any) => {
    //     await client.deleteAssignment(assignmentId);
    //     setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
    // };
    // const addNewAssignment= async () => {
    //     const newAssignment = await client.createAssignment(assignment, cid as string);
    //     setAssignments([...assignments, newAssignment]);
    // };
    // const fetchAssignments = async () => {
    //     const assignments = await client.findAssignmentForCourse(cid as string);
    //     setAssignments(assignments);
    // };
    // useEffect(() => {
    //     fetchAssignments();
    // }, []);

    // Ensure that courses is an array before mapping
    if (!Array.isArray(courses)) {
        return <div>No courses available.</div>;
    }

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>

            <hr />
            <div className="row">
                <div className="col-2">
                    <CoursesNavigation />
                </div>
                
                <div className="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/Editor/:aid" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
                
            </div>
        </div>
    );
}