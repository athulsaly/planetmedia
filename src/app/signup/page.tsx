"use client";

import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/molecules/TextInput";
import FormCard from "@/components/atoms/FormCard";
import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { useSignupController } from "./actions";

export default function Home() {
  const { state } = useSignupController();

  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center justify-center h-screen gap-y-10">
        <section className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-4xl">
            Welcome to{" "}
            <span className="text-primary text-5xl font-bold">Super</span>
            <span className="text-3xl">store</span>
          </h2>
          <p className="text-md">Create your account</p>
        </section>
        <form
          className="flex xl:w-[400px] flex-col items-center justify-center gap-y-6"
          onSubmit={state.form.handleSubmit}
        >
          <FormCard>
            <TextInput
              id="username"
              name="username"
              type="username"
              placeholder="Enter username"
              label="Username"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.username}
              touched={state.form.touched.username}
              errormessage={state.form.errors.username}
              showError
            />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              label="Email"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.email}
              touched={state.form.touched.email}
              errormessage={state.form.errors.email}
              showError
            />
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              label="Password"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.password}
              touched={state.form.touched.password}
              errormessage={state.form.errors.password}
              showError
            />
          </FormCard>
          <Button className="w-full mt-2" type="submit">
            Create Account
          </Button>
        </form>
      </MaxWidthWrapper>
    </>
  );
}
