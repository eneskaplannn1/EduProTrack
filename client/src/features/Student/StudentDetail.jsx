import img1 from "../Screenshot_6.png";

import Modal from "../../UI/Modal";
import { DetailImage, DetailInfo } from "../../UI/Detail";

import StudentForm from "../../UI/form/StudentForm";

import ButtonContainer from "../../UI/Button/ButtonContainer";
import BackButton from "../../UI/Button/BackButton";
import Button from "../../UI/Button/Button";

import { getOne } from "../../services/requestHelpers";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function StudentDetail() {
  const { studentId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getOne("students", studentId),
    queryKey: ["Student"],
  });

  if (isLoading) return <></>;
  console.log(data);
  const { name, email, age, gender, adminssionDate, address, phoneNum, role } =
    data.data.doc;

  return (
    <>
      <BackButton />

      <DetailImage>
        <img src={img1} />
      </DetailImage>
      <DetailInfo>
        <div>FullName : {name}</div>
        <div>Email :{email}</div>
        <div>Age : {age}</div>
        <div>Phone : {phoneNum}</div>
        <div>Address : Some dummy address</div>
        <div>
          Admission Date :
          {new Intl.DateTimeFormat("en-US").format(new Date(adminssionDate))}
        </div>
        <div>Gender : {gender}</div>
        <div>Class : I will handle this</div>
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
            <StudentForm />
          </Modal.Window>
        </Modal>
        <Button type="small" variation="delete">
          Delete Student
        </Button>
      </ButtonContainer>
    </>
  );
}

export default StudentDetail;
