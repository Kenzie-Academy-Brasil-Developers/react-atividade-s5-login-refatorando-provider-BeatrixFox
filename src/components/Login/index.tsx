import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../providers/auth";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";

interface UserData {
  user: string;
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const { signIn } = useContext(AuthContext);
  const schema = yup.object().shape({
    user: yup.string().required("Insira seu nome"),
    email: yup.string().required("Insira seu email"),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const handleForm = (data: UserData) => {
    signIn(data, history);
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <input placeholder="Nome" {...register("user")} />
      <p>{errors.user?.message}</p>
      <input placeholder="Email" {...register("email")} />
      <p> {errors.email?.message}</p>
      <input placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>
      <button type="submit">Entrar</button>
    </Form>
  );
};

export default Login;
