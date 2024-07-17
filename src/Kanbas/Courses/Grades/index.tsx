import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
export default function Grades() {
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
                        <th align="center">A1 SETUP <br />Out of 100</th>
                        <th align="center">A2 HTML <br />Out of 100</th>
                        <th align="center">A3 CSS <br />Out of 100</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-danger">
                            Jane Adams
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <td className="text-danger">
                            Olivia Rodrigo
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                    </tr>
                    <tr>
                        <td className="text-danger">
                            Kendrick Lamar
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <td className="text-danger">
                            Joshua Marks
                        </td>
                        <td>
                            <div className="form-group">
                                <input type="text" placeholder="100%" className="border-0" />
                                <MdOutlineAddBox className="fs-3" />
                            </div> 
                        </td>
                        <td>
                            100%
                        </td>
                        <td>
                            100%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}