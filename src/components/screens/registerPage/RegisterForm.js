import React, {Component} from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {email: false};
  }

  componentWillMount(){}

  handleValidSubmit(event, values) {
    this.setState({email: values.email});
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({email: values.email, error: true});
  }

  closeModal() {
    this.setState({email: false, error: false});
  }

  // handleValidSubmit(event, values) {
  //   this.setState({ userName: values.name });
  //   this.setState({ userLastName: values.lastName});
  //   this.setState({ userEmail: values.email });
  //   this.setState({ userPhone: values.numberPhone});
  //   this.setState({ userAddress: values.address });
  //   this.setState({ userPass: values.password});
  // }

  // handleValidSubmit (evento, values) {
  //   evento.preventDefault();
  // console.log(values.name);
  //   fetch (`http://localhost:8080/user/register`, {
  //     method: 'post',
  //     body: {
  //       "userName": values.name, 
  //       "userLastName":values.lastName,
  //       "userEmail":values.email,
  //       "userPhone": values.numberPhone,
  //       "userAddress": values.address,
  //       "userPass": values.password,
  //     }
  //   })
  // }
  render() {
    const modalError = this.state.error ? 'not' : '';
    return (
      <div>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField name="name" label="Name" type="text" required />
          <AvField name="lastName" label="Last Name" type="text" required />
          <AvField name="email" label="Email" type="email" required />
          <AvField name="numberPhone" label="Number Phone" type="text" required />
          <AvField name="address" label="Address" type="text" required />
          <AvField name="password" label="Password" type="password" required />
          <br />
          <br />
          <Button type="submit" color="primary" block>REGISTER</Button>
          <br />
        </AvForm>
        <Modal isOpen={this.state.email !== false} toggle={this.closeModal}>
          <ModalHeader toggle={this.closeModal}>Form is {modalError} valid!</ModalHeader>
          <ModalBody>
            You have {modalError} successfully filled out the form and submitted it. Your email ({this.state.email}) is {modalError} valid!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.closeModal}>Ok!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RegisterForm