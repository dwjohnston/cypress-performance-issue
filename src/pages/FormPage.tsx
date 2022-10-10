
import React, { useState } from 'react';
import { ImportsNotUsedAsValues } from 'typescript';

export type FormPageProps = {
};



export const FormPage = (props: FormPageProps) => {
    const { } = props;

    const [values, setValues] = useState([] as Array<string>);


    return (
        <div className="forms-page">

            <div className ="sticky-header">
                    <button>I am a button</button>
            </div>

            

            <form onSubmit={(e) => {

                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                console.log(formData);

                const value =formData.get("text");
                console.log(value);

                if(value && typeof value === 'string' && value.length > 0){
                    setValues([...values, value]);
                }

                e.currentTarget.reset()

            }}>
                <label>Enter Text<input type="text" name="text" /></label>
                <input type="submit" />
            </form>


            {values.map((v) => <div className ="rendered-item">{v}</div>)}

        </div>
    );
};
