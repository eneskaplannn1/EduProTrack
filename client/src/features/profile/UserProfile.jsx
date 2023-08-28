import img from "../../../public/default.jpg";

import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import { useAuth } from "../../context/AuthProvider";

function UserProfile() {
  const { user } = useAuth();
  return (
    <>
      <DetailImage>
        <img src={img} />
      </DetailImage>
      <DetailInfo>
        <div>FullName : {user.name}</div>
        <div>Email : {user.email}</div>
        <div>Phone : {user.phoneNum}</div>
        <div>Address : 123 Main Street, City</div>
        <div>Gender : {user.gender}</div>
        <div>Age : {user.age}</div>
        <div>
          Admission Date :
          {new Intl.DateTimeFormat("en-US").format(
            new Date(user.adminssionDate)
          )}
        </div>
      </DetailInfo>
      <ButtonContainer>
        <NavLink to="/account">
          <Button type="small" variation="update">
            Update Account
          </Button>
        </NavLink>
      </ButtonContainer>
    </>
  );
}

export default UserProfile;
