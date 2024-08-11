import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignment`;

export const updateAssignment = async (assignment: any) => {
    const response = await axios.
        put(`${ASSIGNMENT_API}/${assignment}`, assignment);
    return response.data;
};
export const deleteAssignment = async (moduleId: string) => {
    const response = await axios
        .delete(`${ASSIGNMENT_API}/${moduleId}`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignment`, assignment);
    return response.data;
};

export const findAssignmentForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};