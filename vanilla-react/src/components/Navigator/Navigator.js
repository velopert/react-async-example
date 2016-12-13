import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigator.css'

const Navigator = () => (
    <div className="Navigator">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
        />
        <div className="Navigator-page-num">
            3
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigator-right-button"
        /> 
    </div>
);

export default Navigator;
