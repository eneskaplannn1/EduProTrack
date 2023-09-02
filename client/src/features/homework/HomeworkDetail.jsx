import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import BackButton from "../../UI/Button/BackButton";
import { DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import ConfirmDelete from "../../UI/ConfirmDelete";

import EvaluateHomework from "./EvaluateHomework";

import formatHumanReadableDate from "../../utils/formatHumanReadableDate";
import useDeleteHomework from "../../hooks/useDeleteHomework";
import { getHomework, updateHomeworkStatus } from "../../services/apiHomeworks";
import { useAuth } from "../../context/AuthProvider";

function HomeworkDetail() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { homeworkId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getHomework(homeworkId),
    queryKey: ["homework", homeworkId],
  });

  const { mutate, isLoading: isSending } = useMutation({
    mutationFn: updateHomeworkStatus,
    mutationKey: ["homeworks", ["homework", homeworkId]],
    onSuccess: () => {
      queryClient.invalidateQueries(["homeworks", ["homework", homeworkId]]);
    },
  });

  const { isDeleting, DeleteHomework } = useDeleteHomework();

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

  function handleHomeworkStatus(status) {
    mutate({
      data: { status: status },
      id: homeworkId,
    });
  }

  return (
    <>
      <BackButton />
      <DetailInfo>
        <li>Subject : {subject}</li>
        <li>Topic : {topic}</li>
        <li className={status.toLowerCase()}>
          Status : <span>{status}</span>
        </li>
        <li>Starting Date :{formatHumanReadableDate(startDate)}</li>
        <li>Expiration Date : {formatHumanReadableDate(expirationDate)}</li>
        <li>Teacher : {teacher?.name}</li>
        {user.role !== "Student" && (
          <>
            <li>Classroom : {Class.className}</li>
            <li>Students : {students.map((student) => student.name + ", ")}</li>
          </>
        )}
        <li>Description : {description}</li>
      </DetailInfo>

      <ButtonContainer>
        {user.role !== "Student" ? (
          <>
            <Modal>
              <Modal.Open opens="update-homework">
                <Button variation="update" size="small">
                  Update Homework
                </Button>
              </Modal.Open>
              <Modal.Window name="update-homework">
                <HomeworkForm
                  students={students}
                  HomeworkToEdit={data.data.doc}
                  isEditing={true}
                />
              </Modal.Window>
            </Modal>
            <Modal>
              <Modal.Open opens="delete-homework">
                <Button variation="delete" size="small">
                  Delete Homework
                </Button>
              </Modal.Open>
              <Modal.Window variation="medium" name="delete-homework">
                <ConfirmDelete
                  resourceName="Homework"
                  disabled={isDeleting}
                  onConfirm={() => {
                    return DeleteHomework({ _id });
                  }}
                />
              </Modal.Window>
            </Modal>
            {status === "Evaluating" && (
              <Modal>
                <Modal.Open opens="evaluate-homework">
                  <Button>Evaluate Homework</Button>
                </Modal.Open>
                <Modal.Window variation="small" name="evaluate-homework">
                  <EvaluateHomework
                    isSending={isSending}
                    handleHomeworkStatus={handleHomeworkStatus}
                  />
                </Modal.Window>
              </Modal>
            )}
          </>
        ) : (
          status === "Pending" && (
            <Button>{isSending ? "Sending Homework" : "Send Homework"}</Button>
          )
        )}
      </ButtonContainer>
    </>
  );
}

export default HomeworkDetail;
