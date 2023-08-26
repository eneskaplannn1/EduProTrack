import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import BackButton from "../../UI/Button/BackButton";
import { DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import ConfirmDelete from "../../UI/ConfirmDelete";

import formatHumanReadableDate from "../../utils/formatHumanReadableDate";
import { getOne } from "../../services/requestHelpers";
import useDeleteHomework from "../../hooks/useDeleteHomework";

function HomeworkDetail() {
  const { homeworkId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getOne("homeworks", homeworkId),
    queryKey: ["homework", homeworkId],
  });

  const { isDeleting, deleteHomework } = useDeleteHomework();

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  const {
    subject,
    topic,
    description,
    status,
    startDate,
    expirationDate,
    _id,
    teacher,
    class: Class,
    students,
  } = data.data.doc;
  console.log(data.data.doc);

  return (
    <>
      <BackButton />
      <DetailInfo>
        <div>Subject : {subject}</div>
        <div>Topic : {topic}</div>
        <div>Status : {status}</div>
        <div>Starting Date :{formatHumanReadableDate(startDate)}</div>
        <div>Expiration Date : {formatHumanReadableDate(expirationDate)}</div>
        <div>Description : {description}</div>
        <div>Classroom : {Class.className}</div>
        <div>Teacher : {teacher.name}</div>
        <div>Students : {students.map((student) => student.name + ", ")}</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-homework">
            <Button variation="update" size="small">
              Update Homework
            </Button>
          </Modal.Open>
          <Modal.Window name="update-homework">
            <HomeworkForm HomeworkToEdit={data.data.doc} isEditing={true} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open opens="delete-homework">
            <Button variation="delete" size="small">
              Delete Homework
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-homework">
            <ConfirmDelete
              resourceName="Homework"
              disabled={isDeleting}
              onConfirm={() => {
                return deleteHomework({ model: "homeworks", _id });
              }}
            />
          </Modal.Window>
        </Modal>
      </ButtonContainer>
    </>
  );
}

export default HomeworkDetail;
