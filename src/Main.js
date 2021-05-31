import React from "react";
import {Link, useHistory} from "react-router-dom";
import { MainContainer } from "./components/MainContainer";

export const Main = () => {
    return (
        <MainContainer>
    <Link to="/Step1">Sign in</Link>
</MainContainer>
    );
};
