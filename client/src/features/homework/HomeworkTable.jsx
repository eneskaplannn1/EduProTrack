import { NavLink } from "react-router-dom";
import StyledListElement from "../../UI/List/ListElement";

function HomeworkTable({ data }) {
  return (
    <>
      {data?.data?.doc.map((homework) => {
        return (
          <StyledListElement variation="homework" key={homework?._id}>
            <li>{homework?.subject}</li>
            <li>{homework?.topic}</li>
            <li className={homework?.status.toLowerCase()}>
              {homework?.status}
            </li>
            <NavLink to={`/homeworks/${homework?._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </>
  );
}

export default HomeworkTable;
