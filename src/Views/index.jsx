import { Password } from "@mui/icons-material";
import   * as Yup  from "yup";
export const  signUpSchema= Yup.object(
    {
        firstName:Yup.string().min(5).max(10).required("Please Enter your first name"),
        lastName:Yup.string().min(5).max(10).required("Please Enter your last name"),
        email : Yup.string().required().email(),
        password:Yup.string().min(5).max(10).required("Enter your password"),
        confirmPassword: Yup.string()
      .required('Confirm your Password first')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
    });
