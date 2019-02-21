import React, { Component } from 'react';

class EmailForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            formSubmitted: false,
            feedback: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            this.state.feedback);


        this.setState({
            formSubmitted: true
        })
    }

    handleClose() {
        console.log("Closing");  // TODO fix this
    }

    // handleChange(event) {
    //     event.preventDefault();
    //     this.setState({
    //         feedback: event.target.value
    //     });
    //     console.log(this.state.feedback);
    // }

    sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
        console.log(`feedback: ${feedback}`);
        console.log(`this.state.feedback ${this.state.feedback}`);
        window.emailjs.send(
            'default_service',
            templateId,
            {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
                this.setState({ formEmailSent: true });
                console.log("Email sent!");
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

    render() {
        //let feedback = "";
        return(
            <form className="feedback-form" onSubmit={this.handleSubmit}>
                <h1>Your Feedback</h1>
                <textarea
                    className="text-input"
                    id="feedback-entry"
                    name="feedback-entry"
                    onChange={e => this.setState({feedback: e.target.value})}
                    placeholder="Enter your feedback here"
                    required
                    value={this.state.feedback}
                />
                <div className="btn-group">
                    <button className="btn btn--cancel" onClick={this.handleClose}>
                        Cancel
                    </button>
                    <input type="submit" value="Submit" className="btn btn--submit" />
                </div>
            </form>
        )
    }
}

export default EmailForm;