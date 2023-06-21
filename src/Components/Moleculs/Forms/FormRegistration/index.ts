import {connect} from "react-redux";
import {actionsAuthentication} from "../../../../store/Slices/authenticationSlice/actions";
import FormRegistration from "./FormRegistration";

const mapDispatchToProps = () => {
  return {
      postRegistrationData:actionsAuthentication.signUp
  }
}
export default connect(null, mapDispatchToProps())(FormRegistration);
