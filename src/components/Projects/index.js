import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { Grid } from '@material-ui/core';
import { SENTIMENT_ANALYSIS,
    CAPSTONE_SERVER,
    AI_MP1,
    AI_MP2,
    AI_MP3,
    WEDDING_SEATING} from './project_keys';


class Projects extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    tag: SENTIMENT_ANALYSIS,
                    title: "Sentiment Analysis using PySpark",
                    course: "COEN 424",
                    courseName: "Programming on the Cloud",
                    description: "This was our group project for the course. We were a team " +
                        "of three and our goal was to " +
                        "track changes in the sentiment of bitcoin. It doesn't use real in depth sentiment " +
                        "analysis but is more just an introduction to using PySpark and having an app " +
                        "hosted in the cloud.",
                    chips: [
                        {key: 0, label: 'AWS EC2'},
                        {key: 1, label: 'PySpark'},
                        {key: 2, label: 'Jupyter Notebook'}
                        ],
                    link: "https://github.com/Scabandari/Sentiment_Analysis",
                    // docs: {
                    //     problemDescription: {
                    //         file: "cloud.pdf",
                    //         pages: 5
                    //     },
                    //     report: {
                    //         file: "cloud_report.pdf",
                    //         pages: 7
                    //     }
                    // }

                },
                {
                    tag: CAPSTONE_SERVER,
                    title: "IOT Smart Parking Solution",
                    course: "COEN 490",
                    courseName: "Capstone Project",
                    description: "This is our final year group project that uses many different technologies but I'm primarily in charge " +
                        "of the server and soon I'll be programming the gateway. We take sensor readings to determine which " +
                        "parking spaces are available and relay that information to a server hosted in the cloud so that we " +
                        "can inform our users of which spaces are available through a mobile app",
                    chips: [
                        {key: 0, label: 'AWS EC2'},
                        {key: 1, label: 'NodeJs'}
                    ],
                    link: "https://github.com/Scabandari/Capstone-server",
                    // docs: {
                    //     problemDescription: {
                    //         file: "capstone_server.pdf",
                    //         pages: 3
                    //     },
                    //     report: {
                    //         file: "capstone_server_erdiagram.pdf",
                    //         pages: 1
                    //     }
                    // }
                },
                ]
        }
    }

    render() {
        const { projects } = this.state;
        return (
            <div>
                <Grid container>
                    {
                        projects.map(project => {
                            return (
                                <Grid item>
                                    <ProjectCardContainer project = {project} />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        );
    }
}

export default Projects;


