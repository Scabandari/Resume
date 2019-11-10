import React, { Component } from "react";
import {connect} from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";

import { PROBLEM_STATEMENT, REPORT } from '../Projects/constants';
import DocumentNavigationContainer from '../DocumentNavigation/DocumentNavigationContainer';
import { changePage } from '../../actions';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class PDF extends Component {
    constructor(props) {
        super(props);
        //this.state = { numPages: 4, pageNumber: 1 };
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () => {
        //this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
        this.props.changePage(this.props.currentPage.page - 1);
    };
    goToNextPage = () => {
        //this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
        this.props.changePage(this.props.currentPage.page + 1);
    };

    render() {
        //const { pageNumber } = this.state;
        const { project } = this.props.currentProject;
        const { doc } = this.props.currentDoc;
        const { page } = this.props.currentPage;
        //console.log(`doc: ${doc}`);
        let document, pages;
        switch(doc) {
            case PROBLEM_STATEMENT:
                //console.log("switch working");
                document = project.problemStatement.file;
                pages = project.problemStatement.pages;
                break;
            case REPORT:
                document = project.report.file;
                pages = project.report.pages;
                break;
            default:
                document = project.problemStatement.file;
                pages = project.problemStatement.pages;
                break;

        }
        //console.log(`project: ${project.problemDescription.pages}`);

        return (
            <div style={{textAlign: 'center'}}>
                <div style={{ display: 'inline-block' }}>
                    <DocumentNavigationContainer />
                    <Document
                        file={document}

                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={page} width={600} />
                    </Document>
                    <button onClick={this.goToPrevPage} style={{marginLeft: 25}}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </div>


                <p>
                    Page {page} of {pages}
                </p>
            </div>
        );
    }
}

// function mapStateToProps({ currentProject, currentDoc, currentPage }) {
//     return { currentProject, currentDoc, currentPage };
// }

const mapStateToProps = ({currentProject, currentDoc, currentPage }) => {
    return { currentProject, currentDoc, currentPage };
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: (page) => dispatch(changePage(page))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PDF);