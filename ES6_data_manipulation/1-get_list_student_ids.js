export default function getListStudents(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  return data.map(student => student.id);
}
