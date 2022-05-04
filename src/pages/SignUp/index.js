import Header from "../../components/Header";
import { InitialContainer } from "../../styles/mainContainers";
import Footer from "../../components/Footer";
import SignUpForm from "../../components/SignUpForm";
import { Redirect } from "react-router-dom";

const SignUp = ({ authenticated }) => {

  if (authenticated) {
    return <Redirect to='/dashboardMain' />
  }
  return (
    <>
      <Header />
        <SignUpForm />
      <Footer />
    </>
  );
};

export default SignUp;
