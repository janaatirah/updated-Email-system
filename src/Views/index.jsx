import { Password } from "@mui/icons-material";
import   * as Yup  from "yup";
export const  signUpSchema= Yup.object(
    {
        firstName:Yup.string().min(5).max(10).required("enter"),
        lastName:Yup.string().min(5).max(10).required("ur"),
        email : Yup.string().required().email().label('Email'),
        password:Yup.string().min(5).max(10).required("djldkshdf"),
        confirmPassword:Yup.string().required.oneOf([Yup.ref('password'),
        null],"match")
    });
