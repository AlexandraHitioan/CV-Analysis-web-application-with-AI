import React from 'react';
import './Interview.css';
import {Button, ButtonContent, Icon, Image} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import avatarImage from "./avatar _persona.png";

export const Interview = () => {
     const navigate = useNavigate();
     const navigateToAvatar = () => {
         navigate("/Avatar")
     }

     return (
        <div className="backGround">
            <div className= "leftSection2">
                <label className ="interviewHeader">Interact with our Avatar</label>
                <p className="bodyText2">Our HeyGen AI persona is well trained and is able to accurately recreate a practice interview , playing the role of a potential employer.</p>
                <p className="bodyText3">Choose your criteria in the dropdown menu below, so we can custom the interview for you!</p>
                {/*<Button className="dropDown" onClick={*/}
                {/*    <Button className="menuOptions"> Technical Interview </Button>*/}
                {/*    <Button className="menuOptions"> HR Interview</Button>*/}
                {/*}*/}
                <Button className="goToAvatar" onClick={navigateToAvatar}>Start interview</Button>
            </div>
            <div className="rightSection2">
                <img src={avatarImage} alt="Avatar" style={{width:"750px" , height:"750px"}}/>
            </div>
        </div>
     );
}
