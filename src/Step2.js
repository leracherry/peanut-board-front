import React, {Component} from "react";
import {Link, useHistory} from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";
import { Google } from "./Google";
import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login";

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,"The email you entered is not in the correct format. Please check.")
        .email("Email should have correct format")
        .required("Email is a required field"),
    password: yup
        .string()
});


export const Step2 = () => {
    const {setValues, data} = useData();
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        email: data.email,
        password: data.password,
    });

    const onSubmit = (data) => {
        history.push("/");
        setValues(data);
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Sign in
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <Input
                    ref={register}
                    id="Password"
                    type="password"
                    label="Password"
                    name="Password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                />
                <PrimaryButton onClick={()=>window.location.href="http://localhost:63342/Front/peanut-board-front/src/docs/index.html?_ijt=tfju84qcuak0oemnlrqfn7b4l1"}>OK</PrimaryButton>

                <GoogleButton
                    style={{
                        width: 395,
                        textAlign: 'center',
                    }}
                    type="light"// can be light or dark
                    onClick={() => {
                        window.location.assign('/Google');
                    }}
                />

            </Form>
            <br></br>
            <Link to="/">Sign up</Link>

        </MainContainer>
    );
};