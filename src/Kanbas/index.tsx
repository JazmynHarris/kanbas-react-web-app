import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
import * as client from "./Courses/client";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider, useDispatch } from "react-redux";

export default function Kanbas() {
    
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });

    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    
    const deleteCourse = async (courseId: any) => {
        await client.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);
 
    return (
        <Provider store={store}>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}