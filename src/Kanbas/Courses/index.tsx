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
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);

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
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                    </Routes>
                </div>
                
            </div>
        </div>
    );
}