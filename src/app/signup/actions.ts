"use client";

import useCustomRouter from "@/lib/router";
import { apiPaths, routes } from "@/lib/routes";
import { validations } from "@/lib/validations";
import useBackendService from "@/service/BackendServices";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

export const useSignupController = () => {
  const router = useCustomRouter();
  const api = useBackendService();

  const handleSignup = async (
    username: string,
    password: string,
    email: string
  ) => {
    try {
      await api.post(
        apiPaths.signup,
        JSON.stringify({
          username,
          password,
          email,
        })
      );

      toast.success("Signup successful! Redirecting to login page.");
      router.push(routes.login);
    } catch (error) {
      toast.error("Signup failed.");
      console.error("Signup failed:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(validations.required.message)
        .min(
          validations.username.minimum.characters,
          validations.username.minimum.message
        )
        .max(
          validations.username.maximum.characters,
          validations.username.maximum.message
        )
        .matches(
          validations.username.match.regEx,
          validations.username.match.message
        ),
      email: Yup.string()
        .email(validations.email.message)
        .required(validations.required.message),
      password: Yup.string().required(validations.required.message),
    }),
    onSubmit: (values) => {
      handleSignup(values.username, values.password, values.email);
    },
  });

  return {
    state: { form: formik },
    action: {},
  };
};
