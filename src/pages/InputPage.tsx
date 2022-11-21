
import React from 'react';

export type InputPageProps = {
};



export const InputPage = (props: InputPageProps) => {
    const { } = props;


    return (
        <div>
            <div id="some-container" style ={{border: "solid 1px red"}}>
                <div id ="some-text">foobar</div>
            </div>
            <label>enter text here: <input type="text"  id ="enter-text"/></label>
        </div>
    );
};
