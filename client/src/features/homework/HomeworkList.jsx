import { NavLink } from "react-router-dom";

import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import {
  getStudentHomeworks,
  getTeacherHomeworks,
} from "../../services/apiHomeworks";
import { useAuth } from "../../context/AuthProvider";

function HomeworkList() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryFn:
      user.role === "Student"
        ? () => getStudentHomeworks(user._id)
        : () => getTeacherHomeworks(user._id),
    queryKey: ["homeworks"],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;
  // console.log(data);
  return (
    <Fragment>
      <h2>
        <span style={{ color: "#db6d6d" }}>{user.name}&#39;s</span> Homework
        List
      </h2>
      <StyledListHead>
        <div>Subject</div>
        <div>Topic</div>
        <Modal>
          <Modal.Open>
            <Button
              //!sonra hallet
              //!sonra hallet
              //!sonra hallet
              disabled={true}
              style={{ color: "red" }}
              size="small"
              variation="add"
            >
              Do not use This
            </Button>
          </Modal.Open>
          <Modal.Window>
            <HomeworkForm />
          </Modal.Window>
        </Modal>
      </StyledListHead>
      {data.data.doc.map((homework) => {
        return (
          <StyledListElement key={homework._id}>
            <div>{homework.subject}</div>
            <div>{homework.topic}</div>
            <NavLink to={`/homeworks/${homework._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </Fragment>
  );
}

export default HomeworkList;
