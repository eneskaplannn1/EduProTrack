import { NavLink } from "react-router-dom";
import StyledListElement from "../../UI/List/ListElement";

function StudentTable({ students }) {
  return (
    <>
      {students.map((student) => {
        return (
          <StyledListElement variation="student" key={student._id}>
            <img src={`/users/${student.photo}`} />
            <li>{student.name}</li>
            <NavLink to={`/students/${student._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </>
  );
}

export default StudentTable;
