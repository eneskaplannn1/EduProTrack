import Modal from "../../UI/Modal";
import TeacherForm from "../../UI/form/TeacherForm";
import BackButton from "../../UI/Button/BackButton";

import img1 from "../Screenshot_6.png";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import Button from "../../UI/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/apiTeacher";
import { useParams } from "react-router-dom";

function TeacherDetail() {
  const { teacherId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => {
      return getOne("teachers", teacherId);
    },
    queryKey: ["Teacher"],
  });

  if (isLoading) return <></>;

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
        <div>Phone : {phoneNum}</div>
        <div>Address :{address}</div>
        <div>Gender : {gender}</div>
        <div>Age : {age}</div>
        <div>
          Admission Date :
          {new Intl.DateTimeFormat("en-US").format(new Date(adminssionDate))}
        </div>
        <div>Class : I will handle this</div>
        <div>Role : {role}</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-teacher">
            <Button type="small" variation="update">
              Update Teacher
            </Button>
          </Modal.Open>
          <Modal.Window name="update-teacher">
            <TeacherForm />
          </Modal.Window>
        </Modal>
        <Button type="small" variation="delete">
          Delete Teacher
        </Button>
      </ButtonContainer>
    </>
  );
}

export default TeacherDetail;
