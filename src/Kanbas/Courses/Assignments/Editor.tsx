import { LuCalendarDays } from "react-icons/lu";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { useEffect, useState } from "react";
export default function AssignmentEditor(
    // {
    // assignment, setAssignment, updateAssignment, addNewAssignment}: {
    //     assignment: any; setAssignment: (assignment: any) => void;
    //     updateAssignment: () => void;
    //     addNewAssignment: () => void;
    //     }
) {
    const { cid, aid } = useParams();
    
    const [assignments, setAssignments] = useState<any[]>([]);
    
    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentForCourse(cid as string);
        setAssignments(assignments);
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    const [assignment, setAssignment] = useState<any>({
        _id: "1234", title: "New Assignment", description: "New Assignment Description",
        points: "100", dueDate: "2023-12-15", availableDate: "2023-12-15", untilDate: "2023-12-15"
    });

    const fetchAssignment = async () => {
        const assignment = await client.findAssignment(aid as string);
        setAssignment(assignment);
    }
    useEffect(() => {
        fetchAssignment();
    }, []);

    const exists = assignments.find((a) => a._id === aid) !== undefined;

 
    const addNewAssignment = async () => {
        console.log(assignment.toString());
        const newAssignment = await client.createAssignment(assignment, cid as string);
        setAssignments([...assignments, newAssignment]);
    };
    const updateAssignment = async () => {
        await client.updateAssignment(assignment);
        setAssignments(
            assignments.map((a) => {
                if (a._id === assignment._id) {
                    return assignment;
                } else {
                    return a;
                }
            })
        );
    };

    return (
        <div id="wd-assignments-editor">
            <div>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label row">Assignment Name</label><br />
                    <input type="text" id="wd-name" placeholder={assignment.title} className="form-control row"
                        onChange={(e) => { setAssignment({ ...assignment, title: e.target.value }) }}/><br /><br />
                    <input type="text-area" id="wd-description" className="form-control row" placeholder={assignment.description}
                        onChange={(e) => { setAssignment({ ...assignment, description: e.target.value }) }} />
                </div>
                <div>
                    <div className="row p-3">
                        <label htmlFor="wd-points" className="col col-form-label text-end">Points</label>
                        <input type="text" id="wd-points" className="col form-control me-4" placeholder={assignment.points}
                            onChange={(e) => { setAssignment({ ...assignment, points: e.target.value }) }} />
                    </div>
                    <div className="row p-3">
                        <label htmlFor="wd-assign-to" className="col col-form-label text-end">Assign</label>
                        <div className="form-control me-4 col">
                            <label htmlFor="wd-due" className="ms-1 row">Due</label>
                            <div className="row">
                                <div className="col input-group">
                                    <input type="date" id="wd-due-date" className="form-control" placeholder={assignment.dueDate}
                                        onChange={(e) => { setAssignment({ ...assignment, dueDate: e.target.value }) }}/>
                                    <LuCalendarDays className="p-2 fs-1 input-group-text" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <label htmlFor="wd-available" className="col col-form-label"> Available from</label>
                                <label htmlFor="wd-until" className="col col-form-label"> Until</label>
                            </div>
                            <div className="row mb-4">
                                <div className="col input-group">
                                    <input type="date" id="wd-available-date" className="form-control" placeholder={assignment.availableDate}
                                        onChange={(e) => { setAssignment({ ...assignment, availableDate: e.target.value }) }}/>
                                    <LuCalendarDays className="p-2 fs-1 input-group-text" />
                                </div>
                                <div className="col input-group">
                                    <input type="date" id="wd-until-date" className="form-control" placeholder={assignment.untilDate}
                                        onChange={(e) => { setAssignment({ ...assignment, untilDate: e.target.value }) }}/>
                                    <LuCalendarDays className="p-2 fs-1 input-group-text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="float-end">
                    <a href={`/#/Kanbas/Courses/${cid}/Assignments/`}>
                        <button className="btn btn-lg btn-secondary me-1">
                            Cancel
                        </button></a>
                    <a href={`/#/Kanbas/Courses/${cid}/Assignments/`}><button className="btn btn-lg btn-danger"
                        onClick={() => {
                            exists ? updateAssignment() : addNewAssignment() 
                        }}>
                        Save</button></a>
                </div>
            </div>

        </div>
    );
}
