import React from 'react'
import { FormGroup, Label, Input, Button, Form} from 'reactstrap';



export class  RegisterForm extends React.Component {
    render(){
        return (
            <Form>
              <FormGroup>
                <Label for="name">Nombre</Label>
                <Input type="text" name="name" id="name" placeholder="Nombre" />
              </FormGroup>
              <FormGroup>
                <Label for="apellido">Apellido</Label>
                <Input type="text" name="apellido" id="apellido" placeholder="Apellido" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="telefono">Telefono</Label>
                <Input type="text" name="telefono" id="telefono" placeholder="Telefono" />
              </FormGroup>
              <FormGroup>
                <Label for="direccion">Dirección</Label>
                <Input type="text" name="direccion" id="direccion" placeholder="Dirección" />
              </FormGroup>
              <FormGroup>
                <Label for="contraseña">Contraseña</Label>
                <Input type="password" name="contraseña" id="contraseña" placeholder="Contraseña" />
             </FormGroup>
             <FormGroup>
                <Label for="confirmcontraseña">Confirmar Contraseña</Label>
                <Input type="password" name="confirmcontraseña" id="confirmcontraseña" placeholder="Confirmar Contraseña" />
             </FormGroup>
             <br/>
             <Button type="submit" color="primary" block>
                        {'REGISTRAR'}
            </Button>
            </Form>
          );
    }
} 

export default RegisterForm