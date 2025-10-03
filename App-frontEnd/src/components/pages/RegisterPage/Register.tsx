import React from 'react';
import './Register.css';
import {RegisterForm} from "../../Inputs/Forms/Register/RegisterForm";
import {Image} from "semantic-ui-react";

export const Register = () => {
    return (
        <div className={"backGround"}>
            <div className={"RegisterContainer"}>
                <Image
                    // src="https://cdn.discordapp.com/attachments/1219648191474176000/1300441864662683729/iepuras_degerat.png?ex=67222bdd&is=6720da5d&hm=8000a6770caef12b598b6175abe7a1390247fdd1acbedd071c61d8b996b46aa7&"
                    src = "App-frontEnd/public/Logo Proiect.png"
                    className="LogoRegister"
                    size="small"
                    wrapped
                />
                <RegisterForm></RegisterForm>
            </div>
        </div>
    );
}
