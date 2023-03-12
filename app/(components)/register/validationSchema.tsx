
import * as yup from "yup";

const schema = yup
.object()
.shape({
    fullName: yup.string().required("Full Name Name is required"),
  email: yup
    .string()
    .email("This must be a email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "The password must be six characters"),
})
.required();

export default schema


