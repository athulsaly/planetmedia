"use client";

import useCustomRouter from "@/lib/router";
import { apiPaths, routes } from "@/lib/routes";
import useBackendService from "@/service/BackendServices";
import { useFormik } from "formik";
import { useEffect, useState, useCallback } from "react";
import { validations } from "@/lib/validations";
import * as Yup from "yup";
import toast from "react-hot-toast";

export const useDashboardController = () => {
  const router = useCustomRouter();
  const api = useBackendService();
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const [user, setUser] = useState<ProfileResponseProps | null>(null);
  const [editMode, setEditMode] = useState(false);

  const getUser = useCallback(async () => {
    try {
      const response: { data: ProfileResponseProps } = await api.get(
        apiPaths.user
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (token) {
        localStorage.removeItem(token);
      }
      router.push(routes.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      formik.resetForm({ values: { ...user } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleUserUpdate = async (
    firstName: string,
    lastName: string,
    username: string,
    phone: number,
    location: string,
    email: string
  ) => {
    try {
      await api.put(
        apiPaths.user,
        JSON.stringify({
          firstName,
          lastName,
          username,
          phone,
          location,
          email,
        })
      );
      toast.success("Updated successfully.");
      setEditMode(false);
      getUser();
    } catch (error) {
      toast.error("Update failed.");
      console.error("Update failed:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      location: user?.location,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required(validations.required.message)
        .min(
          validations.firstName.minimum.characters,
          validations.firstName.minimum.message
        )
        .max(
          validations.firstName.maximum.characters,
          validations.firstName.maximum.message
        )
        .matches(
          validations.firstName.match.regEx,
          validations.firstName.match.message
        )
        .nullable(),
      lastName: Yup.string()
        .required(validations.required.message)
        .min(
          validations.lastName.minimum.characters,
          validations.lastName.minimum.message
        )
        .max(
          validations.lastName.maximum.characters,
          validations.lastName.maximum.message
        )
        .matches(
          validations.lastName.match.regEx,
          validations.lastName.match.message
        )
        .nullable(),
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
        )
        .nullable(),
      email: Yup.string()
        .email(validations.email.message)
        .required(validations.required.message)
        .nullable(),
      location: Yup.string()
        .required(validations.required.message)
        .min(
          validations.location.minimum.characters,
          validations.location.minimum.message
        )
        .max(
          validations.location.maximum.characters,
          validations.location.maximum.message
        )
        .matches(
          validations.location.match.regEx,
          validations.location.match.message
        )
        .nullable(),
      phone: Yup.string()
        .required(validations.required.message)
        .min(
          validations.phone.minimum.characters,
          validations.phone.minimum.message
        )
        .max(
          validations.phone.maximum.characters,
          validations.phone.maximum.message
        )
        .nullable(),
    }),
    onSubmit: (values) => {
      handleUserUpdate(
        values.firstName || "",
        values.lastName || "",
        values.username || "",
        Number(values.phone) || 0,
        values.location || "",
        values.email || ""
      );
    },
  });

  const handleEditMode = () => () => {
    setEditMode(!editMode);
  };

  return {
    state: { form: formik, isEditable: editMode, user },
    action: { handleEditMode },
  };
};
