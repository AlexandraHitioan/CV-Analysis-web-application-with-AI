import React from 'react';
import './LogIn.css';
import {LogInForm} from "../../Inputs/Forms/LogInForm/LogInForm"
import {Image} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

export const LogIn = () => {

    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate("/register");
    }

    const image = "https://cdn.discordapp.com/attachments/1219648191474176000/1300441864662683729/iepuras_degerat.png?ex=6720da5d&is=671f88dd&hm=c3f2ff3c56cfa5e435d39a497eba03d5394c970d3ff3d648f30479244cfe1177&"
    return (
        <div className={"backGround"}>
            <div className={"LogInContainerLogIn"}>
                <Image src={image} className={"LogoLogIn"} size='small' wrapped />
                <LogInForm></LogInForm>
                <a onClick={navigateToRegister} className={"hyperToRegister"}>Don't have an account?go to register</a>
            </div>
        </div>
    );
}
