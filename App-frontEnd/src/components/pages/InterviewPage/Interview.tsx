import React from 'react';
import './Interview.css';
import {Button, ButtonContent, Icon, Image} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

export const Interview = () => {
     const navigate = useNavigate();
     const navigateToAvatar = () => {
         navigate("/Avatar")
     }

     const exitAvatar = () => {
         navigate("/Interview")
     }

     return (
        <div className="backGround">
            <div className= "leftSection2">
                <h1 className ="interviewHeader">Interact with our Avatar</h1>
                <Button className="goToAvatar" onClick={navigateToAvatar}>Du te la avatarPage</Button>
            </div>
        </div>
     );
}
