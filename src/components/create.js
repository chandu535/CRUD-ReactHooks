import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router";


const Create = () => {
    // let history = useHistory();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        if(firstName!=='' || lastName !=='')
        {axios.post('https://636b4df37f47ef51e12c856c.mockapi.io/fakedata',{
            firstName,
            lastName,
            checkbox
        }).then(() => {
            
            // history.push('/read')
        })
        navigate('/read');
        
    }
        else{
            alert('Please enter deatils');
        }
        
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type="submit" onClick={postData}>Submit</Button>
            </Form>
            
        </div>
    );
};

export default Create;
