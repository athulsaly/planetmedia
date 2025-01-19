"use client";

import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import Navbar from "@/components/molecules/Navbar";
import { Button } from "@/components/ui/button";
import { useDashboardController } from "./actions";
import FormCard from "@/components/atoms/FormCard";
import { TextInput } from "@/components/molecules/TextInput";

const Dashboard = () => {
  const { state, action } = useDashboardController();

  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="flex flex-col py-10 gap-y-10">
        <div className="w-full flex justify-between items-center">
          <div className="font-bold text-4xl text-primary">Dashboard</div>{" "}
          <Button
            className="w-20"
            variant={state.isEditable ? "destructive" : "default"}
            size="sm"
            onClick={action.handleEditMode()}
          >
            {state.isEditable ? "Cancel" : "Edit"}
          </Button>
        </div>
        {!state.isEditable ? (
          <div className="overflow-x-auto flex justify-center">
            <table className="max-w-full">
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    ID
                  </td>
                  <td className="px-4 py-2">{state.user?.id}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    First Name
                  </td>
                  <td className="px-4 py-2">{state.user?.firstName}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    Last Name
                  </td>
                  <td className="px-4 py-2">{state.user?.lastName}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    Username
                  </td>
                  <td className="px-4 py-2">{state.user?.username}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    Email
                  </td>
                  <td className="px-4 py-2">{state.user?.email}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    Phone
                  </td>
                  <td className="px-4 py-2">{state.user?.phone}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700 text-lg">
                    Location
                  </td>
                  <td className="px-4 py-2">{state.user?.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex justify-center">
            <form
              className="flex w-[400px] flex-col items-center justify-center gap-y-6"
              onSubmit={state.form.handleSubmit}
            >
              <FormCard>
                <TextInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  label="First Name"
                  onChange={state.form.handleChange}
                  onBlur={state.form.handleBlur}
                  value={state.form.values.firstName}
                  touched={state.form.touched.firstName}
                  errormessage={state.form.errors.firstName}
                  showError
                />
                <TextInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  label="Last Name"
                  onChange={state.form.handleChange}
                  onBlur={state.form.handleBlur}
                  value={state.form.values.lastName}
                  touched={state.form.touched.lastName}
                  errormessage={state.form.errors.lastName}
                  showError
                />{" "}
                <TextInput
                  id="username"
                  name="username"
                  type="text"
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
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Enter phone"
                  label="Phone"
                  onChange={state.form.handleChange}
                  onBlur={state.form.handleBlur}
                  value={state.form.values.phone}
                  touched={state.form.touched.phone}
                  errormessage={state.form.errors.phone}
                  showError
                />
                <TextInput
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Enter location"
                  label="location"
                  onChange={state.form.handleChange}
                  onBlur={state.form.handleBlur}
                  value={state.form.values.location}
                  touched={state.form.touched.location}
                  errormessage={state.form.errors.location}
                  showError
                />
              </FormCard>
              <Button className="w-full mt-2">Submit</Button>
            </form>
          </div>
        )}
      </MaxWidthWrapper>
    </>
  );
};

export default Dashboard;
