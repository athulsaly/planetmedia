import useCustomRouter from "@/lib/router";
import { apiPaths, routes } from "@/lib/routes";
import { validations } from "@/lib/validations";
import useBackendService from "@/service/BackendServices";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

export const useCreateAdvertisement = () => {
  const router = useCustomRouter();
  const api = useBackendService();

  const handleCreateAd = async (
    title: string,
    price: number,
    description: string,
    image: string
  ) => {
    try {
      const response: { data: CreateAdResponseProps } = await api.post(
        apiPaths.createAd,
        JSON.stringify({
          title,
          price,
          description,
          image,
        })
      );
      const res = response.data;
      toast.success("Advertisement created successfully.");
      router.push(routes.advertisementDetails(`${res.id}`));
    } catch (error) {
      toast.error("Advertisement creation failed.");
      console.error("Advertisement creation failed:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required(validations.required.message)
        .min(
          validations.advertisement.title.minimum.characters,
          validations.advertisement.title.minimum.message
        )
        .max(
          validations.advertisement.title.maximum.characters,
          validations.advertisement.title.maximum.message
        ),
      description: Yup.string()
        .min(
          validations.advertisement.description.minimum.characters,
          validations.advertisement.description.minimum.message
        )
        .required(validations.required.message),

      price: Yup.number().required(validations.required.message).nullable(),

      image: Yup.string().required(validations.required.message),
    }),
    onSubmit: (values) => {
      handleCreateAd(
        values.title,
        values.price,
        values.description,
        values.image
      );
    },
  });

  return {
    state: { form: formik },
    action: {},
  };
};
