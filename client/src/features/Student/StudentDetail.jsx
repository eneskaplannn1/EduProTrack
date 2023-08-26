import { useParams } from "react-router-dom";

import Modal from "../../UI/Modal";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import StudentForm from "../../UI/form/StudentForm";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import ConfirmDelete from "../../UI/ConfirmDelete";
import BackButton from "../../UI/Button/BackButton";
import Button from "../../UI/Button/Button";

import { ClipLoader } from "react-spinners";
import img from "../../../public/default.jpg";

import formatHumanReadableDate from "../../utils/formatHumanReadableDate";
import useDeleteStudent from "../../hooks/useDeleteStudent";
import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";

function StudentDetail() {
  const { studentId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getOne("students", studentId),
    queryKey: ["student", studentId],
  });

  const { isDeleting, deleteStudent } = useDeleteStudent();

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  const {
    name,
    email,
    age,
    gender,
    adminssionDate,
    phoneNum,
    role,
    _id,
    teacher,
    class: Class,
  } = data.data.doc;
  console.log(data.data.doc);

  return (
    <>
      <BackButton />

      <DetailImage>
        <img src={img} />
      </DetailImage>
      <DetailInfo>
        <div>FullName : {name}</div>
        <div>Email :{email}</div>
        <div>Age : {age}</div>
        <div>Phone : {phoneNum}</div>
        <div>Gender : {gender}</div>
        <div>Address : Some dummy address</div>
        <div>Teacher: {teacher.name}</div>
        <div>Class Name : {Class.className}</div>
        <div>Admission Date: {formatHumanReadableDate(adminssionDate)}</div>
        <div>Role : {role}</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-student">
            <Button size="small" variation="update">
              Update Student
            </Button>
          </Modal.Open>
          <Modal.Window name="update-student">
            <StudentForm isEditing={true} StudentToEdit={data.data.doc} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open opens="delete-student">
            <Button type="small" variation="delete">
              Delete Student
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-student">
            <ConfirmDelete
              resourceName="student"
              onConfirm={() => {
                deleteStudent({ model: "students", _id: _id });
              }}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </ButtonContainer>
    </>
  );
}

export default StudentDetail;
