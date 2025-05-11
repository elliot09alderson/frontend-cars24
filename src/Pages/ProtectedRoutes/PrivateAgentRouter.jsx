import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PivateAgentRouter = () => {
  // const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo?.role);
  const userInfo = { role: "agent" };
  if (!userInfo || userInfo?.role !== "agent") {
    return <Navigate to="/agent/login" replace />;
  }

  return <Outlet />;
};

export default PivateAgentRouter;
