import React, { Component } from 'react';

class EmailForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            formSubmitted: false,
            feedback: "",
            name: "",
            user_email: "",
            company: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template
        } = process.env;

        //let feedback  = this.state.feedback;
        //console.log(`feedback: ${this.state.feedback}`);
        this.sendFeedback(
            template,
            this.props.senderEmail,
            receiverEmail,
            this.state.feedback,
            this.state.name,
            this.state.user_email,
            this.state.company);


        this.setState({
            formSubmitted: true
        })
    }

    handleClose() {
        console.log("Closing");  // TODO fix this
    }


    sendFeedback (
        templateId, 
        senderEmail, 
        receiverEmail, 
        feedback, 
        name, 
        user_email, 
        company
        ) {
        console.log(`feedback: ${feedback}`);
        console.log(`this.state.feedback ${this.state.feedback}`);
        window.emailjs.send(
            'default_service',
            templateId,
            {
                senderEmail,
                receiverEmail,
                feedback,
                name,
                user_email,
                company
            })
            .then(res => {
                this.setState({ formEmailSent: true });
                console.log("Email sent!");
            })
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

    render() {
        return(
            <div className="ui segment" style={{margin: 50}}>
                <form className="feedback-form" onSubmit={this.handleSubmit}>
                    <h4 style={{color: '#493C55'}}>Contact Us</h4>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Contact Email</label>
                        <input
                            type="text"
                            value={this.state.user_email}
                            onChange={e => this.setState({user_email: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Company</label>
                        <input
                            type="text"
                            value={this.state.company}
                            onChange={e => this.setState({company: e.target.value})}
                        />
                    </div>
                    <textarea
                        className="text-input"
                        id="feedback-entry"
                        name="feedback-entry"
                        onChange={e => this.setState({feedback: e.target.value})}
                        placeholder="Enter your email message here"
                        required
                        value={this.state.feedback}
                    />
                    <div className="btn-group">
                        <button className="btn btn--cancel" onClick={this.handleClose} style={{
                            backgroundColor: '#f44336',
                            marginRight: 3}}>
                            Cancel
                        </button>
                        <input type="submit" value="Submit" className="btn btn--submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EmailForm;