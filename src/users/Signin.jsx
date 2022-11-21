import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AppInput from "../components/AppInput";
import { signIn } from "../store/user";
import { AppButton } from "../theme";
import UserFormLayout from "./UserFormLayout";

let SignIn = (props) => {
  let dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  let onSubmit = (data) => {
    dispatch(signIn({ credentials: data }));
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput type="email" name="email" register={register} label="Email" />

        <AppInput
          type="password"
          name="password"
          register={register}
          label="Password"
        />
        <AppButton type="submit" small>
          Log In
        </AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignIn;
