"use client";

import FormCard from "@/components/atoms/FormCard";
import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { TextInput } from "@/components/molecules/TextInput";
import { Button } from "@/components/ui/button";
import { useCreateAdvertisement } from "./actions";
import Navbar from "@/components/molecules/Navbar";

const CreateAdvertisement = () => {
  const { state } = useCreateAdvertisement();
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-y-10 py-10">
        <h2 className="flex justify-start w-full text-primary text-4xl font-bold">
          Create advertisement
        </h2>

        <form
          className="flex w-[400px] flex-col items-center justify-center gap-y-6"
          onSubmit={state.form.handleSubmit}
        >
          <FormCard>
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              label="Title"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.title}
              touched={state.form.touched.title}
              errormessage={state.form.errors.title}
              showError
            />
            <TextInput
              id="description"
              name="description"
              type="text"
              placeholder="Enter description"
              label="Description"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.description}
              touched={state.form.touched.description}
              errormessage={state.form.errors.description}
              showError
            />
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="Enter price"
              label="Price"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.price}
              touched={state.form.touched.price}
              errormessage={state.form.errors.price}
              showError
            />
            <TextInput
              id="image"
              name="image"
              type="text"
              placeholder="Enter image URL"
              label="Image URL"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.image}
              touched={state.form.touched.image}
              errormessage={state.form.errors.image}
              showError
            />
          </FormCard>
          <Button type="submit" className="w-full mt-2">
            Create advertisement
          </Button>
        </form>
      </MaxWidthWrapper>
    </>
  );
};

export default CreateAdvertisement;
