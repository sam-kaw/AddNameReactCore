import React, { Component } from 'react';

class SubmitName extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            firstNameError: false,
            lastNameError: false
        };
    }

    // On Submit function call
    submitName = e => {

        const { firstName, lastName} = this.state;
        const { submitFormFn } = this.props;

        e.preventDefault();
        
        const data = new FormData(e.target);

        const firstNameSub = data.get('firstNameVal');
        const lastNameSub = data.get('lastNameVal');

        if (firstNameSub !== '' && lastNameSub !== '') {
            submitFormFn(firstNameSub, lastNameSub);
            this.setState({
                firstName: null,
                lastName: null,
            });
        } else {
            if (firstNameSub === '') {
                this.setState({
                    firstName: null,
                    lastName: null,
                    firstNameError: true
                });
            } else {
                this.setState({
                    firstName: null,
                    lastName: null,
                    lastNameError: true
                });
            }
            
        }
        document.getElementById('addFirstNameInput').value = '';
        document.getElementById('addLastNameInput').value = '';
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <div className='addNameContainer'>
                <form onSubmit={(e) => this.submitName(e)}>
                    <div className="form-group">
                        <label
                            htmlFor='addFirstNameInput'
                            className='font-weight-bold'
                        >
                            Enter First Name
                        </label>
                        <input
                            name='firstNameVal'
                            type='text'
                            id='addFirstNameInput'
                            className='form-control form-control-lg'
                            placeholder='First Name'
                            pattern="[A-Za-z]{1,20}"
                            title="First Name should only contain alphabets, max length 20"
                            defaultValue={firstName}
                            onChange={e => {
                                this.setState({
                                    firstName: e.target.value,
                                    firstNameError: false
                                });
                            }}
                        />
                        {this.state.firstNameError ? (

                            <div>
                                <span className="text-danger">
                                    Please enter a valid string
                                </span>
                            </div>
                        ) : (
                                ''
                            )}
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor='addLastNameInput'
                            className='font-weight-bold'
                        >
                            Enter Last Name
                        </label>
                        <input
                            name='lastNameVal'
                            type='text'
                            id='addLastNameInput'
                            className='form-control form-control-lg'
                            placeholder='Last Name'
                            pattern="[A-Za-z]{1,20}"
                            title="Last Name should only contain alphabets, max length 20"
                            defaultValue={lastName}
                            onChange={e => {
                                this.setState({
                                    lastName: e.target.value,
                                    lastNameError: false
                                });
                            }}
                        />

                        {this.state.lastNameError ? (

                            <div>
                                <span className="text-danger">
                                    Please enter a valid string
                                </span>
                            </div>
                        ) : (
                                ''
                            )}
                    </div>

                    <button
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default SubmitName;