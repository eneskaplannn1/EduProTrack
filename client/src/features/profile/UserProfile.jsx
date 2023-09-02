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
        <li>FullName : {user.name}</li>
        <li>Email : {user.email}</li>
        <li>Gender : {user.gender}</li>
        <li>Age : {user.age}</li>
        <li>Phone : {user.phoneNum}</li>
        <li>Address : 123 Main Street, City</li>
        <li>Role : {user.role}</li>
        <li>
          Admission Date :
          {new Intl.DateTimeFormat("en-US").format(
            new Date(user.adminssionDate)
          )}
        </li>
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
