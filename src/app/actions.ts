"use client";

import useCustomRouter from "@/lib/router";
import { apiPaths, routes } from "@/lib/routes";
import { validations } from "@/lib/validations";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MouseEvent } from "react";
import useBackendService from "@/service/BackendServices";
import toast from "react-hot-toast";

export const useLoginController = () => {
  const router = useCustomRouter();
  const api = useBackendService();

  const handleLogin = async (username: string, password: string) => {
    try {
      const response: { data: LoginResponseProps } = await api.post(
        apiPaths.login,
        JSON.stringify({
          identifier: username,
          password,
        })
      );

      const token = response.data?.jwt;
      if (token) {
        localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN!, token);
      }
      toast.success("Login successful!");
      router.push(routes.dashboard);
    } catch (error) {
      toast.error("Invalid username or password");
      console.error("Login failed:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      loggedIn: false,
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
      password: Yup.string().required(validations.required.message),
      loggedIn: Yup.boolean(),
    }),
    onSubmit: (values) => {
      handleLogin(values.username, values.password);
    },
  });

  const gotoSignupPage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    router.push(routes.signup);
  };

  return {
    state: { form: formik },
    action: { gotoSignupPage },
  };
};
