import Modal from "../../UI/Modal";
import TeacherForm from "../../UI/form/TeacherForm";
import BackButton from "../../UI/Button/BackButton";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import ConfirmDelete from "../../UI/ConfirmDelete";
import Button from "../../UI/Button/Button";

import { ClipLoader } from "react-spinners";
import img from "../../../public/default.jpg";

import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";
import { useParams } from "react-router-dom";
import formatHumanReadableDate from "../../utils/formatHumanReadableDate";
import useDeleteTeacher from "../../hooks/useDeleteTeacher";

function TeacherDetail() {
  const { teacherId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getOne("teachers", teacherId);
    },
    queryKey: ["Teacher"],
  });

  const { isDeleting, deleteTeacher } = useDeleteTeacher();

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;
  const {
    name,
    email,
    age,
    gender,
    adminssionDate,
    address,
    phoneNum,
    role,
    _id,
    class: Class,
  } = data.data.doc;

  return (
    <>
      <BackButton />
      <DetailImage>
        <img src={img} />
      </DetailImage>
      <DetailInfo>
        <div>Full Name: {name}</div>
        <div>Email: {email}</div>
        <div>Phone: {phoneNum}</div>
        <div>Address: {address}</div>
        <div>Gender: {gender}</div>
        <div>Age: {age}</div>
        <div>Admission Date: {formatHumanReadableDate(adminssionDate)}</div>
        <div>Class: {Class.className}</div>
        <div>Role: {role}</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-teacher">
            <Button type="small" variation="update">
              Update Teacher
            </Button>
          </Modal.Open>
          <Modal.Window name="update-teacher">
            <TeacherForm isEditing={true} TeacherToEdit={data.data.doc} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open opens="update-teacher">
            <Button type="small" variation="delete">
              Delete Teacher
            </Button>
          </Modal.Open>
          <Modal.Window name="update-teacher">
            <ConfirmDelete
              resourceName="teacher"
              disabled={isDeleting}
              onConfirm={() => {
                deleteTeacher({ model: "teachers", _id });
              }}
            />
          </Modal.Window>
        </Modal>
      </ButtonContainer>
    </>
  );
}

export default TeacherDetail;
