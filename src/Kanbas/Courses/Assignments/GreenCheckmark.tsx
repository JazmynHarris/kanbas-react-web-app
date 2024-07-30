import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";
export default function GreenCheckmark({ assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
    return (
        <span className="me-1 position-relative">
            <FaTrash className="text-danger fs-5 me-2" data-bs-toggle="modal" data-bs-target="#wd-delete-module-dialog"/>
            <DeleteAssignment
                dialogTitle="Delete Assignment"
                assignmentId={assignmentId}
                deleteAssignment={deleteAssignment} />
            <FaCheckCircle style={{ top: "2px" }}
                className="text-success me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-1 fs-6" />
        </span>
    );
}
