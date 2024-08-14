import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <table id="wd-home">
            <div className="row">
                <div className="col">
                    <Modules />
                </div>
                <div className="col-1">
                    <CourseStatus />
                </div>
            </div>
        </table>
    );
}
