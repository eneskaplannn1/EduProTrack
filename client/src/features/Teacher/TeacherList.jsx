import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import img1 from "../Screenshot_6.png";

import TeacherForm from "../../UI/form/TeacherForm";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button/Button";
import StyledListElement from "../../UI/List/ListElement";
import StyledListHead from "../../UI/List/ListHead";

import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../services/requestHelpers";

function TeacherList() {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => {
      return getAll("teachers");
    },
    queryKey: ["teachers"],
  });

  if (isLoading) return <></>;

  // console.log(data.data.doc);
  return (
    <Fragment>
      <h1>Teacher List</h1>
      <StyledListHead>
        <div>Teacher Avatar</div>
        <div>Teacher Name</div>
        <Modal>
          <Modal.Open>
            <Button size="small" variation="add">
              Add New Teacher
            </Button>
          </Modal.Open>
          <Modal.Window>
            <TeacherForm />
          </Modal.Window>
        </Modal>
      </StyledListHead>
      {data.data.doc.map((teacher) => {
        return (
          <StyledListElement key={teacher._id}>
            <img src={img1} />
            <div>{teacher.name}</div>
            <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </Fragment>
  );
}

export default TeacherList;
