import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!")
    .min(4, "Username must be at least 4 characters long"),
  //     ,
  //   password: yup
  //     .string()
  //     .required("Must enter a password!")
  //     .min(1, "Password must be at least 1 characters long"),
});

export default formSchema;
