import img1 from "../Screenshot_6.png";

import Modal from "../../UI/Modal";
import { DetailImage, DetailInfo } from "../../UI/Detail";

import StudentForm from "../../UI/form/StudentForm";

import ButtonContainer from "../../UI/Button/ButtonContainer";
import BackButton from "../../UI/Button/BackButton";
import Button from "../../UI/Button/Button";

import { deleteOne, getOne } from "../../services/requestHelpers";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import ConfirmDelete from "../../UI/ConfirmDelete";

function StudentDetail() {
  const { studentId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getOne("students", studentId),
    queryKey: ["Student"],
  });

  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteStudent } = useMutation({
    mutationFn: deleteOne,
    mutationKey: ["deleteStudent"],
    onSuccess: async () => {
      toast.success("Student deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["students"] });
      navigate("/students");
    },
  });

  if (isLoading) return <></>;
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
  } = data.data.doc;

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
