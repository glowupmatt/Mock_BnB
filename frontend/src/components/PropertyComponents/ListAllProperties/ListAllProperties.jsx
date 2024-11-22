import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ListAllProperties() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return <div>ListAllProperties</div>;
}

export default ListAllProperties;
