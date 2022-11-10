import React, { useState, useEffect } from "react";
import {Button, Table} from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';


const Read = () => {
    const navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://636b4df37f47ef51e12c856c.mockapi.io/fakedata')
        .then((response) => {
            setAPIData(response.data);
            console.log(response.data);
        })
    }, [])

    const onDelete=(id) => {
        if(window.confirm(`Are you sure you want to delete?`))
        {
            axios.delete(`https://636b4df37f47ef51e12c856c.mockapi.io/fakedata/${id}`)
            .then(() => {
                getData();
            })
        }
    }

    const getData=() => {
        axios.get('https://636b4df37f47ef51e12c856c.mockapi.io/fakedata')
        .then((getData) => {
            setAPIData(getData.data);
            console.log(getData.data);
        })
    }

    const setData = (data) => {
        // console.log(data)
        let {id,firstName,lastName,checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value',checkbox);

        navigate('/update');
    }
    return(
        <div  className="create-form">
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                        {APIData.map((data) =>{
                            return(
                                <Table.Row key={data.id}>
                                  <Table.Cell>{data.id}</Table.Cell>
                                  <Table.Cell>{data.firstName}</Table.Cell>
                                  <Table.Cell>{data.lastName}</Table.Cell>
                                  <Table.Cell>{data.checkbox ? 'Checked':'Unchecked'}</Table.Cell>
                                  <Table.Cell ><Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                                  <Table.Cell ><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                                </Table.Row>
                            )})}

                        {/* <Table.Cell><Link to="/update">Update</Link></Table.Cell> */}
                        
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;






/* <table singleLine border='1'>
                    <tr>
                        <th>Name</th>
                        <th>Registration Date</th>
                        <th>E-mail Address</th>

                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Registration Date</td>
                        <td>E-mail Address</td>
                        
                        <td><Link to="/update">Update</Link></td>
                        
                    </tr>
            </table> */