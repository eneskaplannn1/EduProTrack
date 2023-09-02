import { NavLink } from "react-router-dom";
import { Fragment } from "react";

import TeacherForm from "../../UI/form/TeacherForm";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";

import { ClipLoader } from "react-spinners";

import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../../services/apiTeachers";
import TeacherTable from "./TeacherTable";

function TeacherList() {
  const { data, isLoading } = useQuery({
    queryFn: getTeachers,
    queryKey: ["teachers"],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  return (
    <Fragment>
      <StyledListHead variation="teacher">
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
      <TeacherTable data={data} />
    </Fragment>
  );
}

export default TeacherList;
