import { NavLink, useParams } from "react-router-dom";

import BackButton from "../../UI/Button/BackButton";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";

import Modal from "../../UI/Modal";
import Button from "../../UI/Button/Button";
import StudentForm from "../../UI/form/StudentForm";
import ChoseHomework from "../homework/ChoseHomework";
import useClass from "../../hooks/useClass";
import StudentTable from "../Student/StudentTable";

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 1.2rem 0;

  color: red;
  font-weight: bold;

  font-size: 1.2rem;
`;

function ClassDetail() {
  const { classId } = useParams();

  const { data, isLoading } = useClass({ classId });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;
  const { className, students, capacity, teacher, classID } = data.data.doc;
  console.log(students);
  return (
    <>
      <BackButton />
      <StyledHeader>
        <li>Class Name : {className}</li>
        <li>Number of students: {students.length}</li>
        <li>Capacity : {capacity}</li>
      </StyledHeader>

      <>
        <h2>Teacher</h2>
        <StyledListHead variation="teacher">
          <li>Teacher Avatar</li>
          <li>Teacher Name</li>
          <Modal>
            <Modal.Open opens="choose-homework">
              <Button>Give Homework</Button>
            </Modal.Open>
            <Modal.Window variation="medium" name="choose-homework">
              <ChoseHomework
                teacherId={teacher._id}
                classId={classID}
                students={students}
              />
            </Modal.Window>
          </Modal>
        </StyledListHead>
        <StyledListElement variation="teacher">
          <img src={`/users/${teacher.photo}`} />
          <li>{teacher.name}</li>
          <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
        </StyledListElement>
      </>

      <>
        <h2>Students</h2>
        <StyledListHead variation="class">
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
        <StudentTable students={students} />
      </>
    </>
  );
}

export default ClassDetail;
