import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { Grid } from '@material-ui/core';
// import { SENTIMENT_ANALYSIS, CAPSTONE_SERVER,
//     AI_MP1, AI_MP2, AI_MP3, WEDDING_SEATING, REPORT, PROBLEM_STATEMENT} from './constants';
import { cloud, cloud_report, capstone_server, server_diagram, mp1_report,
    ai_mp1, EA_ass1_r, EA_ass1, auction_sytem, auction_sytem_r }  from './PDFs/pdf_files'


class Projects extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    //tag: SENTIMENT_ANALYSIS,
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
                    github_repos: [{
                        link: "https://github.com/Scabandari/Sentiment_Analysis",
                        name: "Repo"
                    }],
                    docs: {
                        problemStatement: {
                            file: cloud,
                            pages: 5
                        },
                        report: {
                            file: cloud_report,
                            pages: 7
                        }
                    }

                },
                {
                    //tag: CAPSTONE_SERVER,
                    title: "IOT Smart Parking Solution",
                    course: "COEN 490",
                    courseName: "Capstone Project",
                    description: "This is our final year group project that uses many different technologies but I'm primarily in charge " +
                        "of the server and soon I'll be programming the gateway. We take sensor readings to determine which " +
                        "parking spaces are available and relay that information to a server hosted in the cloud so that we " +
                        "can inform our users of which spaces are available through a mobile app.",
                    chips: [
                        {key: 0, label: 'AWS EC2'},
                        {key: 1, label: 'NodeJs'}
                    ],
                    github_repos: [{
                        link: "https://github.com/Scabandari/Capstone-server",
                        name: "repo"
                    }],
                    docs: {
                        problemStatement: {
                            file: capstone_server,
                            pages: 3
                        },
                        report: {
                            file: server_diagram,
                            pages: 1
                        }
                    }
                },
                {
                    //tag: SENTIMENT_ANALYSIS,
                    title: "A.I Mini Project #1: 11-puzzle",
                    course: "COMP 472",
                    courseName: "Artificial Intelligence",
                    description: "This was our first of three projects for this class that we completed in " +
                        "teams of two. We solved a variation of the 8-puzzle using different heuristics. " +
                        "I was responsible for the DFS and A* parts.",
                    chips: [
                        {key: 0, label: 'A.I'},
                        {key: 1, label: 'Heuristics'},
                        {key: 2, label: 'Python'}
                    ],
                    github_repos: [{
                        link: "https://github.com/Scabandari/AI_proj1",
                        name: "repo"
                    }],
                    docs: {
                        problemStatement: {
                            file: ai_mp1,
                            pages: 4
                        },
                        report: {
                            file: mp1_report,
                            pages: 6
                        }
                    }

                },
                {
                    title: "Wedding Seating Plan",
                    course: "COEN 432",
                    courseName: "Evolutionary Algorithms",
                    description: "This was our first of two assignments and a very quick dive into the " +
                        "basics of Evolutionary Algorithms which are quite interesting and useful." +
                        " It was after taking this course I felt completely comfortable doing anything " +
                        "in Python3.",
                    chips: [
                        {key: 0, label: 'A.I'},
                        {key: 1, label: 'Heuristics'},
                        {key: 2, label: 'Python'}
                    ],
                    github_repos: [{
                        link: "https://github.com/Scabandari/Wedding_Seating_Plan",
                        name: "repo"
                    }],
                    docs: {
                        problemStatement: {
                            file: EA_ass1,
                            pages: 12
                        },
                        report: {
                            file: EA_ass1_r,
                            pages: 14
                        }
                    }

                },
                {
                    title: "Auction System Client & Server",
                    course: "COEN 445",
                    courseName: "Communication Networks and Protocols",
                    description: "This was my first attempt to use sockets. We were a group of three" +
                        " and I was responsible for everything UDP and also the very rudimentary GUI. " +
                        "My teammates had a late start on the TCP parts so we were really rushed to " +
                        " finish but for the most part it works and was a good introduction to sockets for" +
                        " me as well as great practice using the producer consumer model and multiple threads.",
                    chips: [
                        {key: 0, label: 'Networking'},
                        {key: 1, label: 'Socket Programming'},
                        {key: 2, label: 'Python'},
                        {key: 3, label: 'Multithreading'}
                    ],
                    github_repos: [
                        {
                            link: "https://github.com/Scabandari/CLIENT",
                            name: "client"
                        },
                        {
                            link: "https://github.com/Scabandari/SERVER",
                            name: "server"
                        }
                        ],
                    docs: {
                        problemStatement: {
                            file: auction_sytem,
                            pages: 6
                        },
                        report: {
                            file: auction_sytem_r,
                            pages: 19
                        }
                    }

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


