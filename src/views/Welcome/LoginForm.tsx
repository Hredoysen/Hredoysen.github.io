import "./styles.scss";
import TopBar from "../../components/ui/Topbar/topBar.tsx";
import Profile from "../Section/welcomeSection.tsx";
import Tour from "../Section/tourSection.tsx";
import Project from "../Section/projectSection.tsx";

function Login() {
  return (
    <>
      <TopBar />
      <Profile />
      <Tour />
      <Project />
    </>
  );
}

export default Login;
