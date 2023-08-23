import Modal from "../../UI/Modal";
import TeacherForm from "../../UI/form/TeacherForm";
import BackButton from "../../UI/Button/BackButton";

import img1 from "../Screenshot_6.png";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import Button from "../../UI/Button/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteOne, getOne } from "../../services/requestHelpers";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import ConfirmDelete from "../../UI/ConfirmDelete";
import { ClipLoader } from "react-spinners";
import formatHumanReadableDate from "../../utils/formatHumanReadableDate";

function TeacherDetail() {
  const { teacherId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getOne("teachers", teacherId);
    },
    queryKey: ["Teacher"],
  });

  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTeacher } = useMutation({
    mutationFn: deleteOne,
    mutationKey: ["deleteTeacher"],
    onSuccess: async () => {
      toast.success("Teacher deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["teacher"] });
      navigate("/teachers");
    },
  });
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
  } = data.data.doc;

  return (
    <>
      <BackButton />
      <DetailImage>
        <img src={img1} />
      </DetailImage>
      <DetailInfo>
        <div>Full Name: {name}</div>
        <div>Email: {email}</div>
        <div>Phone: {phoneNum}</div>
        <div>Address: {address}</div>
        <div>Gender: {gender}</div>
        <div>Age: {age}</div>
        <div>Admission Date: {formatHumanReadableDate(adminssionDate)}</div>
        <div>Class: I will handle this</div>
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
