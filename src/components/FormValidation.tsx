
import { SubmitHandler, useForm } from 'react-hook-form';
import {Form, Button} from 'semantic-ui-react';


type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password:string
  };


const classError = {color:'red', fontSize:'12px'}

const FormValidation = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => setTimeout(loggeador,2000)

    const loggeador = () => console.log(errors);
    
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label> First name</label>
                    <input 
                    placeholder='First name ' 
                    type={'text'}
                    {...register('firstName',{required:true, maxLength:10})}
                    />
                </Form.Field>
                    {errors.firstName && <span style={classError}>Porfavor verifica tu Nombre</span>}
                <Form.Field>
                    <label> Last Name</label>
                    <input placeholder='Last Name'
                        type={'text'}
                       {...register('lastName',{required:true, maxLength:10})}/>
                </Form.Field>
                    {errors.lastName && <span style={classError}>Porfavor verifica tu Apellido</span>}
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email'
                        type={'email'}
                       {...register('email',{
                            required:true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                       }    )}/>
                </Form.Field>
                    {errors.email && <span style={classError}>Porfavor verifica tu Email</span>}
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' 
                        type={'password'}
                       {...register('password',
                       {required:true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}/>
                </Form.Field>
                    {errors.password && <span style={classError}>Porfavor verifica tu Contraseña</span>}
                    <br/>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default FormValidation
