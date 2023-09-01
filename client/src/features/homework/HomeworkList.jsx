import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";
import { ClipLoader } from "react-spinners";

import { useAuth } from "../../context/AuthProvider";
import useHomeworks from "../../hooks/useHomeworks";

function HomeworkList() {
  const { user } = useAuth();
  const { data, isLoading } = useHomeworks(user);

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  return (
    <Fragment>
      <h2>
        <span style={{ color: "#e4e0e0" }}>{user.name}&#39;s</span> Homework
        List
      </h2>
      <StyledListHead>
        <div>Subject</div>
        <div>Topic</div>
        <div>Status</div>
        <div>Homework Detail</div>
      </StyledListHead>
      {data?.data?.doc.map((homework) => {
        return (
          <StyledListElement variation="homework" key={homework?._id}>
            <div>{homework?.subject}</div>
            <div>{homework?.topic}</div>
            <div className={homework?.status.toLowerCase()}>
              {homework?.status}
            </div>
            <NavLink to={`/homeworks/${homework?._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </Fragment>
  );
}

export default HomeworkList;
