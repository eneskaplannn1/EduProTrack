import { NavLink } from "react-router-dom";

import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";
import { Fragment } from "react";
import { getAll } from "../../services/requestHelpers";
import { useQuery } from "@tanstack/react-query";

function HomeworkList() {
  const { data, isLoading } = useQuery({
    queryFn: () => getAll("homeworks"),
    queryKey: ["homeworks"],
  });

  if (isLoading) return <></>;

  return (
    <Fragment>
      <h1>Homework List</h1>
      <StyledListHead>
        <div>Subject</div>
        <div>Topic</div>
        <Modal>
          <Modal.Open>
            <Button size="small" variation="add">
              Add New Homework
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
