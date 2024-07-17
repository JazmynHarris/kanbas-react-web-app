import { LuCalendarDays } from "react-icons/lu";
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label><br />
                <input type="text" id="wd-name" value="A1 - ENV + HTML" className="form-control"/><br /><br />
                <textarea id="wd-description" className="form-control text-area">
                    The assignment is <span className="text-danger">available online</span>
                    <p>Submit a link to the landing page of your Web application running on Netlify.</p>
                    <p>The landing page should include the following:</p>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>Link to the Kanbas application</li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <p>The Kanbas application should inlcude a link to navigate back to the landing page.</p>
                </textarea>
            </div>

            <table className="table">
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points" className="form-label p-3">Points</label>
                    </td>
                    <td >
                        <input type="text" id="wd-points"  className="form-control" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group" className="form-label p-3">Assignment Group</label>
                    </td>
                    <td>
                        <select className="form-select">
                            <option value="wd-assignment" >ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as" className="form-label p-3">Display Grade as</label>
                    </td>
                    <td>
                        <select className="form-select">
                            <option value="wd-percentage" className="dropdown-item">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type" className="form-label p-3">Submission Type</label>
                    </td>
                    <td className="form-group form-control p-3">
                        <select className="form-select form-group-item mb-3">
                            <option value="online">Online</option>
                        </select>
                        <div className="list-group-item ">
                            <label className="form-label ">Online Entry Options</label> <br />
                            <div className="form-check">
                                <input type="checkbox" name="entry-options" id="wd-text-entry" className="form-check-input" />
                                <label htmlFor="wd-text-entry" className="form-label">Text Entry</label><br />

                                <input type="checkbox" name="entry-options" id="wd-website-url" className="form-check-input"/>
                                <label htmlFor="wd-website-url" className="form-label">Website URL</label><br />

                                <input type="checkbox" name="entry-options" id="wd-media-recordings" className="form-check-input"/>
                                <label htmlFor="wd-media-recordings" className="form-label">Media Recordings</label><br />

                                <input type="checkbox" name="entry-options" id="wd-student-annotation" className="form-check-input"/>
                                <label htmlFor="wd-student-annotation" className="form-label">Student Annotation</label><br />

                                <input type="checkbox" name="entry-options" id="wd-file-upload" className="form-check-input"/>
                                <label htmlFor="wd-file-upload" className="form-label">File Uploads</label><br />
                            </div>
                        </div>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top" className="p-3">
                        <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                    </td>
                    <td className="form-control">
                        <tr>
                            <td>
                                <label htmlFor="" className="form-label">Assign to</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" id="wd-assign-to" value="Everyone"/>
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <label htmlFor="wd-assign-to" className="form-label">Due</label>
                            </td>
                        </tr>
                        <tr>
                            <td className="input-group">
                                <input type="date" id="wd-assign-to" value="Everyone" className="" />
                                <LuCalendarDays className="form-control p-2 fs-1" />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            </td>
                            <td>
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                            </td>
                        </tr>
                        <tr>
                            <td className="input-group">
                                <input type="date" id="wd-due-date" value="2024-05-13" className="" />
                                <LuCalendarDays className="form-control p-2 fs-1" />
                            </td>
                            <td className="input-group">
                                <input type="date" id="wd-available-until" value="2024-05-13" className="" />
                                <LuCalendarDays className="form-control p-2 fs-1 "/>
                            </td>
                        </tr>
                        
                    </td>
                </tr>
            </table>
            <hr />
            <div className="float-end">
                <button className="btn btn-lg btn-secondary me-1">Cancel</button>
                <button className="btn btn-lg btn-danger">Save</button>
            </div>
        </div>
    );
}
