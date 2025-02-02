"use client";

import { Button } from "@/components/ui/button";
import { useLoginController } from "./actions";
import { TextInput } from "@/components/molecules/TextInput";
import FormCard from "@/components/atoms/FormCard";
import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";

const Home = () => {
  const { state, action } = useLoginController();

  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center justify-center h-screen gap-y-10">
        <section className="flex flex-col items-center justify-center gap-y-2 text-center">
          <h2 className="text-2xl">
            Login to <br />
            <span className="text-primary text-5xl font-bold">Super</span>
            <span className="text-3xl font-medium">Store</span>
          </h2>
        </section>
        <form
          className="flex w-[400px] flex-col items-center justify-center gap-y-6"
          onSubmit={state.form.handleSubmit}
        >
          <FormCard>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              label="Username"
              onChange={state.form.handleChange}
              onBlur={state.form.handleBlur}
              value={state.form.values.username}
              touched={state.form.touched.username}
              errormessage={state.form.errors.username}
              showError
            />
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
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
            Login
          </Button>
          <div className="flex flex-col w-full items-center gap-y-4">
            <hr className="border-t border-gray-300 w-full" />
            <Button
              variant="outline"
              className="w-full"
              onClick={action.gotoSignupPage}
            >
              Create new account
            </Button>
          </div>
        </form>
      </MaxWidthWrapper>
    </>
  );
};
export default Home;
