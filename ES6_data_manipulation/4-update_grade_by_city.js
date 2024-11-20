export default function updateStudentGradeByCity(students, city, newGrades) {
	const studentsFiltered = students.filter(student => student.location === city);

	return studentsFiltered.map(student => {
		const gradeObj = newGrades.find(grade => grade.studentId === student.id);
		return {
			...student,
			grade: gradeObj ? gradeObj.grade : 'N/A'
		};
	});
}
