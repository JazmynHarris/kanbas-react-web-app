import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import GreenCheckmark from "./GreenCheckmark";
import { useLocation, useParams } from "react-router";
import * as db from "../../Database";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Assignments() {
    const { cid } = useParams();
    const [assignments, setAssignments] = useState<any[]>(db.modules);
    // const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const deleteAssignment = (assignmentId: string) => {
        setAssignments(assignments.filter((a) => a._id !== assignmentId));
    }
    console.log(cid);
    return (
        <div id="wd-assignments">
            <br /><br /><br /><br />
            <div className="input-group p-0 mb-5 fs-5">
                <FaMagnifyingGlass className="input-group-item me-2 fs-3 mt-1 text-secondary"/>
                    <input type="text" id="wd-search-assignment"
                        placeholder="Search..." className="form-control me-5 w-150" />
                <button id="wd-add-assignment-group " className="input-group-item btn btn-lg btn-secondary ms-3 me-3 ps-3 float-end">+ Group</button>
                <a href={`/#/Kanbas/Courses/${cid}/Assignments/Editor`}><button id="wd-add-assignment" className="input-group-item btn btn-lg btn-danger ps-3 float-end">
                    + Assignment</button></a>
                
            </div>
            <br />
            <ul className="list-group rounded-0">

                <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-assignments-title" className="p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <MdExpandMore className="me-2 fs-3" />
                        ASSIGNMENTS
                        <IoEllipsisVertical className="float-end me-2 fs-3" />
                        <FaPlus className="float-end me-2 fs-3" />
                        <span className="border rounded-5 float-end me-2 fs-5"> 40% of Total </span>
                        
                        
                    </div>
                </li>
                {assignments
                    .filter((assignment: any) => assignment.course == cid)
                    .map((assignment: any) => (
                    <li className="list-group-item p-0 fs-5">
                        <div className="float-start p-3 ps-2 fs-1 me-3">
                            <BsGripVertical className="me-2" />
                            <TbChecklist className="text-success" />
                        </div>
                            <div className="float-start">
                                <h4>{assignment._id}: {assignment.title} </h4>
                            
                            <p>
                                <span className="text-danger">Multiple Modules </span>
                                | <span className="text-secondary">Not available until </span> May 6 at 12:00am |
                            </p>
                            <p>
                                <span className="text-secondary">Due</span> | May 13 at 11:59pm | 100 pts
                            </p>
                        </div>
                        <div className="float-end p-3 ps-2 me-3">
                                <GreenCheckmark assignmentId={assignment._id}
                                deleteAssignment={deleteAssignment}/>
                            <IoEllipsisVertical className="" />
                        </div>
                    </li>
                ))}
            </ul>
        
        </div>
    );
}