import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import BackButton from "../../UI/Button/BackButton";
import { DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";

function HomeworkDetail() {
  const { homeworkId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getOne("homeworks", homeworkId),
    queryKey: ["Homework"],
  });
  if (isLoading) return <></>;
  console.log(data);
  const { subject, topic, description, status, startDate, expirationDate } =
    data.data.doc;

  return (
    <>
      <BackButton />
      <DetailInfo>
        <div>Subject : {subject}</div>
        <div>Topic : {topic}</div>
        <div>Description : {description}</div>
        <div>Status : {status}</div>
        <div>Teacher :I will handle this later</div>
        <div>Students : I will handle this later</div>
        <div>Starting Date :{startDate}</div>
        <div>Expiration Date : {expirationDate}</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-homework">
            <Button variation="update" size="small">
              Update Homework
            </Button>
          </Modal.Open>
          <Modal.Window name="update-homework">
            <HomeworkForm />
          </Modal.Window>
        </Modal>
        <Button variation="delete" size="small">
          Update Homework
        </Button>
      </ButtonContainer>
    </>
  );
}

export default HomeworkDetail;
