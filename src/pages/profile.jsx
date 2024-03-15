import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1 className="text-3xl font-bold">Profile</h1>
      Username :{" "}
      <Link to="/products" className="text-blue-600">
        {username}
      </Link>
    </div>
  );
};

export default ProfilePage;
