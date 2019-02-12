import React, { Component } from "react";
import {connect} from "react-redux";
//import { Document, Page } from "react-pdf";
//import file from './ass4.pdf'
import mp1_file from './aimp1.pdf';
import cloud_file from './cloud.pdf';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;// TODO DO I NEED FILE VIEWER OR SOMETHING? WOULDN'T IMAGES NOT WORK THEN?

class PDF extends Component {
    constructor(props) {
        super(props);
        this.state = { numPages: 4, pageNumber: 1 };
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber, numPages } = this.state;

        const project_docs = {
            'SENTIMENT_ANALYSIS': {
                file: cloud_file,
                pages: 5
            }
        };

        return (
            <div style={{textAlign: 'center'}}>
                <div style={{ display: 'inline-block' }}>
                    <Document
                        file={project_docs['SENTIMENT_ANALYSIS'].file}

                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>
                <button onClick={this.goToPrevPage} style={{marginLeft: 25}}>Prev</button>
                <button onClick={this.goToNextPage}>Next</button>

                <p>
                    Page {pageNumber} of {project_docs['SENTIMENT_ANALYSIS'].pages}
                </p>
            </div>
        );
    }
}

function mapStateToProps({currentProject, currentDocument}) {
    return { currentProject, currentDocument };
}

export default connect(mapStateToProps)(PDF);