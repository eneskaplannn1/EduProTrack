import Modal from "../../UI/Modal";
import TeacherForm from "../../UI/form/TeacherForm";
import BackButton from "../../UI/Button/BackButton";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import ConfirmDelete from "../../UI/ConfirmDelete";
import Button from "../../UI/Button/Button";

import { ClipLoader } from "react-spinners";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import formatHumanReadableDate from "../../utils/formatHumanReadableDate";
import useDeleteTeacher from "../../hooks/useDeleteTeacher";
import { getTeacher } from "../../services/apiTeachers";
import { useAuth } from "../../context/AuthProvider";

function TeacherDetail() {
  const { user } = useAuth();
  const { teacherId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getTeacher(teacherId);
    },
    queryKey: ["teacher", teacherId],
  });

  const { isDeleting, DeleteTeacher } = useDeleteTeacher();

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
    photo,
    class: Class,
  } = data.data.doc;

  return (
    <>
      <BackButton />
      <DetailImage>
        <img src={`/users/${photo}`} />
      </DetailImage>
      <DetailInfo>
        <li>Full Name: {name}</li>
        <li>Email: {email}</li>
        <li>Phone: {phoneNum}</li>
        <li>Address: {address}</li>
        <li>Gender: {gender}</li>
        <li>Age: {age}</li>
        <li>Admission Date: {formatHumanReadableDate(adminssionDate)}</li>
        <li>Class: {Class.className}</li>
        <li>Role: {role}</li>
      </DetailInfo>
      {user.role === "Admin" && (
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
                  DeleteTeacher({ _id });
                }}
              />
            </Modal.Window>
          </Modal>
        </ButtonContainer>
      )}
    </>
  );
}

export default TeacherDetail;
