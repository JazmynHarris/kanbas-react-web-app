import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaCircle, FaPlus, FaTrash } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as client from "./client";
import DeleteAssignment from "./DeleteAssignment";

export default function Assignments() {
    // const saveAssignment = async (assignment: any) => {
    //     const status = await client.updateAssignment(assignment);
    //     dispatch(updateAssignment(assignment));
    // };

    // const removeAssignment = async (assignmentId: string) => {
    //     await client.deleteAssignment(assignmentId);
    //     dispatch(deleteAssignment(assignmentId));
    // };
    // const createAssignment = async (assignment: any) => {
    //     const newAssignment = await client.createAssignment(assignment, cid as string);
    //     dispatch(addAssignment(assignment));
    // }
    // const fetchAssignments = async () => {
    //     const assignments = await client.findAssignmentForCourse(cid as string);
    //     dispatch(setAssignments(assignments));
    // };
    // useEffect(() => {
    //     fetchAssignments();
    // }, []);


    // const dispatch = useDispatch();
    const { cid } = useParams();
    // const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const [assignments, setAssignments] = useState<any[]>([]);

    const deleteAssignment = async (assignmentId: any) => {
        await client.deleteAssignment(assignmentId);
        setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
    };

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentForCourse(cid as string);
        setAssignments(assignments);
    };
    useEffect(() => {
        fetchAssignments();
    }, []);
 



    return (
        <div id="wd-assignments">
            <br /><br /><br /><br />
            <div className="row p-0 mb-5 fs-5">
                <div className="col input-group">
                    <button className="btn btn-secondary input-group-item"><FaMagnifyingGlass className="text-secondary" /></button>
                    <input type="text" id="wd-search-assignment"
                        placeholder="Search..." className="input-group-item form-control" />
                </div>
                <div className="col">
                    <button id="wd-add-assignment-group " className="btn btn-lg btn-secondary ms-3 me-3 ps-3 float-end">+ Group</button>
                    <a href={`/#/Kanbas/Courses/${cid}/Assignments/Editor/newAssignment`}><button id="wd-add-assignment" className="btn btn-lg btn-danger ps-3 float-end">
                        + Assignment</button></a>
                </div>


            </div>
            <br />
            <ul className="list-group rounded-0">

                <li className="list-group-item p-0 fs-5 border-gray">
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
                    .map((a: any) => (
                        <li className="list-group-item p-0 fs-5">
                            <div className="float-start p-3 ps-2 fs-1 me-3">
                                <BsGripVertical className="me-2" />
                                <TbChecklist className="text-success" />
                            </div>
                            <div className="float-start mt-2">
                                <a href={`/#/Kanbas/Courses/${cid}/Assignments/Editor/${a._id}`} className=""><h4>{a._id}: {a.title} </h4></a>

                                <p>
                                    <span className="text-danger">Multiple Modules </span>
                                    | <span className="text-secondary">Not available until </span> May 6 at 12:00am |
                                </p>
                                <p>
                                    <span className="text-secondary">Due</span> | May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <div className="float-end p-3 ps-2 me-3">
                                <span className="me-1 position-relative">
                                    <FaTrash className="text-danger fs-5 me-2" data-bs-toggle="modal" data-bs-target="#wd-delete-module-dialog" />
                                    <div id="wd-delete-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                                        Delete Assignment
                                                    </h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Are you sure you would like to delete this assignment: {a._id}?</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                        Cancel </button>
                                                    <button onClick={() => deleteAssignment(a._id)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                                        Ok </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <FaCheckCircle style={{ top: "2px" }}
                                        className="text-success me-1 position-absolute fs-5" />
                                    <FaCircle className="text-white me-1 fs-6" />
                                    {/* <DeleteAssignment
                                        dialogTitle="Delete Assignment"
                                        assignmentId={a._id}
                                        deleteAssignment={() => deleteAssignment(a._id)} />
                                    <FaCheckCircle style={{ top: "2px" }}
                                        className="text-success me-1 position-absolute fs-5" />
                                    <FaCircle className="text-white me-1 fs-6" /> */}
                                </span>
                                {/* <button
                                    onClick={() => deleteAssignment(a._id)}>Delete</button>
                                <GreenCheckmark
                                    assignmentId={a._id}
                                    deleteAssignment={() => {
                                        console.log(a._id);
                                        deleteAssignment(a._id);
                                    }}
                                /> */}
                                <IoEllipsisVertical className="" />
                            </div>
                        </li>
                    
                    ))}
            </ul>

        </div>
    );
}