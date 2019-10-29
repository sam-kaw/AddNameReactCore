import React, { Component } from 'react';
import SubmitName from './SubmitName';

import axios from 'axios';

class NameForm extends Component {

    /*
     API call to the backend controller for adding Name in the file
     */

    submitForm = (firstNameSub, lastNameSub) => {
        axios
            .post('api/FormAPI/addName', { firstName: firstNameSub, lastName: lastNameSub })
            .then((res) => console.log(res.data))
            .catch(error => this.setState({ error, isLoading: false }));
    };

    render() {
        return (
            <div>
                <SubmitName submitFormFn={this.submitForm}/>
            </div>
            )
    }
}

export default NameForm;