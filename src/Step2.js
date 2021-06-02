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
import GoogleLoginButton from 'react-google-login-button'



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
                <PrimaryButton onClick={()=>window.location.href="http://localhost:63342/peanut-board-front/peanut-board-front/src/docs/index.html?_ijt=30b4bqtsq3530bo57k1o2i33n4"}>OK</PrimaryButton>
                <GoogleLoginButton alignment='center' className="GoogleLogin"
                                   buttonLocale="en"
                googleClientId='242591386881-0mfgm6rd6nvdgib9m8gkgdpj1o4c7lh9.apps.googleusercontent.com'
                onLoginSuccess={(googleUser) => {
                    console.log('Replace this function to start using this information');
                    console.log('Google User:', googleUser.getBasicProfile());
                    console.log('ID token:', googleUser.getAuthResponse().id_token);
                }}
                onLoginFailure={() => console.log('Login failed')}
                width={395}
                height={40}
                longTitle={false}
                theme="light"
                />
        </Form>
            <Link to="/">Sign up</Link>

        </MainContainer>
    );
};