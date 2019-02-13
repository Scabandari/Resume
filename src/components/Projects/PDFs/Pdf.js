import React, { Component } from "react";
import {connect} from "react-redux";
//import { Document, Page } from "react-pdf";
//import file from './ass4.pdf'
import mp1_file from './aimp1.pdf';
import cloud from './cloud.pdf';
import cloud_report from './cloud_report.pdf';
import capstone_server from './capstone_server.pdf';
import capstone_server_erdiagram from './capstone_server_erdiagram.pdf';
import {SENTIMENT_ANALYSIS,
    CAPSTONE_SERVER,
    AI_MP1,
    AI_MP2,
    AI_MP3,
    WEDDING_SEATING,
    PROBLEM_STATEMENT,
    REPORT} from '../project_keys';


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

        const project_docs = {  // TODO should be getting the file name from redux store
            SENTIMENT_ANALYSIS: {
               project_description: {
                   file: cloud,
                   pages: 5
               },
                report: {
                   file: cloud_report,
                    pages: 7
                }
            },
            CAPSTONE_SERVER: {
                project_description: {
                    file: capstone_server,
                    pages: 3
                },
                report: {
                    file: capstone_server_erdiagram,
                    pages: 1
                }
            }

        };
        // const keys = this.props.currentProject.keys();
        // for (let k in keys)
        //     console.log(this.props.currentProject[k]);
        //console.log(`CURRENT_PROJECT: ${this.props.currentProject[1]}`);

        // if(this.props.currentProject === undefined) {
        //     return <h3>Loading...</h3>
        // } else {
        //     console.log(`Sentiment??: ${this.props.currentProject.project_key}`);
        // }

        const { project_key } = this.props.currentProject;
        const project = project_docs[project_key];

        return (
            <div style={{textAlign: 'center'}}>
                <div style={{ display: 'inline-block' }}>
                    <Document
                        file={project.project_description.file}

                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>
                <button onClick={this.goToPrevPage} style={{marginLeft: 25}}>Prev</button>
                <button onClick={this.goToNextPage}>Next</button>

                <p>
                    Page {pageNumber} of {project.project_description.pages}
                </p>
            </div>
        );
    }
}

function mapStateToProps({ currentProject }) {
    return { currentProject };
}

export default connect(mapStateToProps)(PDF);