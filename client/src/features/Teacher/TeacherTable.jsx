import { NavLink } from "react-router-dom";
import StyledListElement from "../../UI/List/ListElement";

function TeacherTable({ data }) {
  return (
    <>
      {data.data.doc.map((teacher) => {
        return (
          <StyledListElement variation="teacher" key={teacher._id}>
            <img src={`/users/${teacher.photo}`} />
            <div>{teacher.name}</div>
            <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </>
  );
}

export default TeacherTable;
