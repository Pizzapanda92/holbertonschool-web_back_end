export default function getStudentIdsSum(student) {
    return students.reduce((sum, student) => sum + student.id, 0);
}
