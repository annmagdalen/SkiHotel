import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { theme } from '../theme';

const Form = styled.form`
border-radius: 8px;
box-shadow: 0 0 5px lightblue;
display: flex;
flex-direction: column;
margin: 5rem auto;
padding: 2rem;
width: 20rem;
`

const Label = styled.label`
font-size: 1.125rem;
font-weight: normal;
`

const Input = styled.input`
border: 1px solid lightblue;
border-radius: 5px;
padding: 0.5rem;
margin-bottom: 1.5rem;

&:focus {
border-color: #3985ef;
border-width: 1px;
box-shadow: 0 0 3px #3985ef;
outline: none;
}
`

const Button = styled.button`
background-color: #3985ef;
border: none;
border-radius: 5px;
color: white;
font-size: 1.125rem;
padding: 0.25rem 1rem;
width: max-content;
`

export class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <Form>
                <Label>Username</Label>
                <Input />
                <Label>Password</Label>
                <Input />
                <Button>Log in</Button>
            </Form>
        );
    }
}
