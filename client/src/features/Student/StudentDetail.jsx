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
import { getStudent } from "../../services/apiStudents";
import { useAuth } from "../../context/AuthProvider";

function StudentDetail() {
  const { user } = useAuth();
  const { studentId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getStudent(studentId),
    queryKey: ["student", studentId],
  });

  const { isDeleting, DeleteStudent } = useDeleteStudent();

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

  return (
    <>
      <BackButton />

      <DetailImage>
        <img src={img} />
      </DetailImage>
      <DetailInfo>
        <li>FullName : {name}</li>
        <li>Email :{email}</li>
        <li>Age : {age}</li>
        <li>Phone : {phoneNum}</li>
        <li>Gender : {gender}</li>
        <li>Address : Some dummy address</li>
        <li>Teacher: {teacher?.name}</li>
        <li>Class Name : {Class?.className}</li>
        <li>Admission Date: {formatHumanReadableDate(adminssionDate)}</li>
        <li>Role : {role}</li>
      </DetailInfo>
      {user.role === "Admin" && (
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
                  DeleteStudent({ _id });
                }}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
        </ButtonContainer>
      )}
    </>
  );
}

export default StudentDetail;
