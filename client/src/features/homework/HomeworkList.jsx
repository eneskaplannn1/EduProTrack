import { Fragment } from "react";

import StyledListHead from "../../UI/List/ListHead";
import HomeworkTable from "./HomeworkTable";
import { ClipLoader } from "react-spinners";

import useHomeworks from "../../hooks/useHomeworks";

function HomeworkList({ user }) {
  const { data, isLoading } = useHomeworks(user);

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  return (
    <Fragment>
      <StyledListHead variation="homework">
        <li>Subject</li>
        <li>Topic</li>
        <li>Status</li>
        <li>Homework Detail</li>
      </StyledListHead>
      <HomeworkTable data={data} />
    </Fragment>
  );
}

export default HomeworkList;
