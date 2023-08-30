import { NavLink, useParams } from "react-router-dom";

import BackButton from "../../UI/Button/BackButton";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";
import img from "../../../public/default.jpg";

import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";
import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import StudentForm from "../../UI/form/StudentForm";
import ChoseHomework from "../homework/ChoseHomework";

const StyledClassDetail = styled.div`
  h1 {
  }
  .teacher {
    color: #eab34d;
  }
  .student {
    color: yellow;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    margin: 1.2rem 0;

    color: red;
    font-weight: bold;

    font-size: 1.2rem;
  }
`;

function ClassDetail() {
  const { classId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getOne("classes", classId),
    queryKey: ["class", classId],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  const { className, students, capacity, teacher, classID } = data.data.doc;

  return (
    <StyledClassDetail>
      <BackButton />
      <div className="header">
        <div>Class Name : {className}</div>
        <div>Number of students: {students.length}</div>
        <div>Capacity : {capacity}</div>
      </div>
      <h2 className="teacher">Teacher</h2>
      <StyledListHead>
        <div>Teacher Avatar</div>
        <div>Teacher Name</div>
        <Modal>
          <Modal.Open>
            <Button>Give Homework</Button>
          </Modal.Open>
          <Modal.Window>
            <ChoseHomework
              teacherId={teacher._id}
              classId={classID}
              students={students}
            />
          </Modal.Window>
        </Modal>
      </StyledListHead>
      <StyledListElement>
        <img src={img} />
        <div>{teacher.name}</div>
        <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
      </StyledListElement>

      <h2 className="student">Students</h2>
      <StyledListHead>
        <div>Students Avatar</div>
        <div>Student Name</div>
        <Modal>
          <Modal.Open>
            <Button>Add student to class</Button>
          </Modal.Open>
          <Modal.Window>
            <StudentForm teacherId={teacher._id} classId={classID} />
          </Modal.Window>
        </Modal>
      </StyledListHead>
      {students.map((student) => {
        return (
          <StyledListElement key={student._id}>
            <img src={img} />
            <div>{student.name}</div>
            <NavLink to={`/students/${student._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </StyledClassDetail>
  );
}

export default ClassDetail;
