import { SubmitHandler, useForm } from 'react-hook-form';
import {Form, Button} from 'semantic-ui-react';


type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password:string
  };


const FormValidation = () => {
    const {register,handleSubmit,formState} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label> First name</label>
                    <input 
                    placeholder='First name ' 
                    type={'text'}
                    {...register('firstName')}
                    />
                </Form.Field>
                <Form.Field>
                    <label> Last Name</label>
                    <input placeholder='Last Name'
                        type={'text'}
                       {...register('lastName')}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email'
                        type={'email'}
                       {...register('email')}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' 
                        type={'password'}
                       {...register('password')}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default FormValidation
