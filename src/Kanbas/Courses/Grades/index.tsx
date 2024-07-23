import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
import * as db from "../../Database";
import { useParams } from "react-router-dom";
export default function Grades() {
    const enrollments = db.enrollments;
    const { cid } = useParams();
    const users = db.users;
    const assignments = db.assignments;
    const grades = db.grades;
    return (
        <div>
            <div className="float-end">
                <button className="btn btn-lg btn-secondary me-3">
                    <FaFileImport className="fs-3 me-3" />
                    Import
                </button>
                <button className="btn btn-lg btn-secondary me-3">
                    <FaFileExport className="fs-3" />
                    Export
                    <IoIosArrowDown className="fs-3" />
                </button>
                <button className="btn btn-lg btn-secondary me-3">
                    <FaGear className="fs-3" />
                </button>
            </div>
            <div className="row">
                <div className="col">
                    <h3> Student Names</h3>
                </div>
                <div className="col">
                    <h3>Assignment Names</h3>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col form-control p-3 me-3 fs-5">
                    <CiSearch className="me-3"/>
                    <input type="text" placeholder="Search Students" className="border-0"/>
                    <IoIosArrowDown className="fs-3 float-end" />
                </div>
                <div className="col form-control p-3 me-3 fs-5">
                    <CiSearch className="me-3"/>
                    <input type="text" placeholder="Search Assignments" className="border-0" />
                    <IoIosArrowDown className="fs-3 float-end" />
                </div>
            </div>
            <button className="btn btn-lg btn-secondary float-start mb-3">
                <CiFilter className="fs-2"/>
                Apply Filters
            </button>
            <table className="table fs-4">
                <thead className="table-secondary">
                    <tr>
                        <th>Student Name</th>
                        {
                            assignments
                                .filter((assignment) => (assignment.course === cid))
                                .map((assignment) => (
                                    <th align="center">{assignment._id} <br /> Out of 100</th>
                                ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {

                        users.filter((user) => enrollments.find((e) => e.course === cid && e.user === user._id))
                            .map((user) => (
                                <tr>
                                    <td className="text-danger">{user.firstName} {user.lastName}</td>
                                    {grades.filter((g) => (g.student === user._id))
                                        .map((grade) => 
                                            <td align="center">{grade.grade}</td>)}
                                </tr>
                            ))}
            
                </tbody>
            </table>
        </div>
    );
}