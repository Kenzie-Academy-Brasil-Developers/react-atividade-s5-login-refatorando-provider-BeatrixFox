import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../providers/auth";
import { Container } from "./styles";
import kenzie from "../../assets/kenzie.png";

const Dashboard = () => {
  const { Logout } = useContext(AuthContext);
  const history = useHistory();
  return (
    <Container>
      <img src={kenzie} alt="kenzie logo" />
      <button onClick={() => Logout(history)}>Logout</button>
    </Container>
  );
};

export default Dashboard;
