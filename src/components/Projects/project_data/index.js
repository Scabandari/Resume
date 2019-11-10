import { BASH, DATA_SCIENCE, WEB_DEV, ALL } from '../constants';
import {
  ai_mp1,
  auction_sytem,
  auction_sytem_r,
  capstone_server,
  cloud,
  cloud_report,
  EA_ass1,
  EA_ass1_r,
  mp1_report,
  perfectPort,
  perfectPort_r,
  server_diagram,
  minicap,
  minicap_r,
  eternity,
  eternity_r,
  db_ass1,
  db_ass1_r,
  mp2,
  mp2_r,
  ann_carr,
  ann_carr_r,
  ai_mp3,
  ai_mp3_r,
  script,
  script_r
} from '../PDFs/pdf_files';

const data = [
  {
    tags: [ALL],
    title: 'Concussion App for Athletes',
    course: 'COEN 390',
    courseName: 'Engineering Team Design Project',
    description:
      'This was our group project for the course. We used a heart monitor ' +
      'sensor combined with an Android app to help athletes manage their heart rate ' +
      'during the recovery period after suffering a concussion which allowed faster recovery' +
      " times. This course is mandatory for all COEN and ELEC students and our team's " +
      'project won the first place price that semester.',
    chips: [
      { key: 0, label: '1st Place Award' },
      { key: 1, label: 'Android' },
      { key: 2, label: 'Sensors' },
      { key: 3, label: 'Agile' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/ConcussionApp',
        name: 'Repo'
      }
    ],
    docs: {
      problemStatement: {
        file: minicap,
        pages: 1
      },
      report: {
        file: minicap_r,
        pages: 40
      }
    }
  },
  {
    tags: [DATA_SCIENCE, ALL],
    title: 'Deep Learning: Exploring Car Value with an ANN',
    course: 'Side Project',
    courseName: 'Udemy: Deep Learning A-Z: Hands-On Artificial Neural Networks',
    description:
      "After working through the section on basic ANN's I wanted to try " +
      'one out for myself so I grabbed a data set from UCI Machine Learning Repository. ' +
      "I found one on the quality of vehicles that wasn't too large. It had 2 numerical " +
      'features and the rest categorical as well as a categorical label. I was able to ' +
      'classify this data set with an accuracy of over 93%.',
    chips: [
      { key: 0, label: 'Machine Learning' },
      { key: 1, label: 'A.I' },
      { key: 2, label: 'Tensorflow' },
      { key: 3, label: 'Keras' },
      { key: 4, label: 'Python3' },
      { key: 5, label: 'Pandas' },
      { key: 6, label: 'Numpy' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/ANN_cars',
        name: 'Repo'
      }
    ],
    docs: {
      problemStatement: {
        file: ann_carr,
        pages: 1
      },
      report: {
        file: ann_carr_r,
        pages: 5
      }
    }
  },
  {
    tags: [DATA_SCIENCE, ALL],
    title: 'Sentiment Analysis using PySpark',
    course: 'COEN 424',
    courseName: 'Programming on the Cloud',
    description:
      'This was our group project for the course. We were a team ' +
      'of three and our goal was to ' +
      "track changes in the sentiment of bitcoin. It doesn't use real in depth sentiment " +
      'analysis but is more just an introduction to using PySpark and having an app ' +
      'hosted in the cloud.',
    chips: [
      { key: 0, label: 'AWS EC2' },
      { key: 1, label: 'PySpark' },
      { key: 2, label: 'Jupyter Notebook' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/Sentiment_Analysis',
        name: 'Repo'
      }
    ],
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
    tags: [BASH, ALL],
    title: 'My First Bash Script',
    course: 'Side Project',
    courseName: 'Working with EC2 Instances',
    description:
      'I needed to send many files to my EC2 instance from my Ubuntu machine. ' +
      "I didn't want to copy paste the same command over and over again so I automated the " +
      'process and wrote my first bash script.',
    chips: [
      { key: 0, label: 'Shell Scripting' },
      { key: 1, label: 'Bash' },
      { key: 2, label: 'EC2' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/Send_EC2_Files',
        name: 'repo'
      }
    ],
    docs: {
      problemStatement: {
        file: script,
        pages: 1
      },
      report: {
        file: script_r,
        pages: 1
      }
    }
  },
  {
    tags: [DATA_SCIENCE, ALL],
    title: 'A.I Mini Project #2: Classification',
    course: 'COMP 472',
    courseName: 'Artificial Intelligence',
    description:
      'This was our second of three projects for this class that we completed in ' +
      'teams of two. We were given two data sets and our objective was to tune hyperparameters ' +
      'for Naive Bays, Decision Trees and one other algorithm of our choosing.',
    chips: [
      { key: 0, label: 'A.I' },
      { key: 1, label: 'Classification' },
      { key: 2, label: 'Python' },
      { key: 3, label: 'Machine Learning' },
      { key: 4, label: 'Scikit-learn' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/AI_proj2',
        name: 'repo'
      }
    ],
    docs: {
      problemStatement: {
        file: mp2,
        pages: 1
      },
      report: {
        file: mp2_r,
        pages: 9
      }
    }
  },

  {
    tags: [WEB_DEV, ALL],
    title: 'IOT Smart Parking Solution',
    course: 'COEN 490',
    courseName: 'Capstone Project',
    description:
      "This is our final year group project that uses many different technologies but I'm primarily in charge " +
      "of the server and soon I'll be programming the gateway. We take sensor readings to determine which " +
      'parking spaces are available and relay that information to a server hosted in the cloud so that we ' +
      'can inform our users of which spaces are available through a mobile app.',
    chips: [{ key: 0, label: 'AWS EC2' }, { key: 1, label: 'NodeJs' }],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/Capstone-server',
        name: 'repo'
      }
    ],
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
    tags: [DATA_SCIENCE, ALL],
    title: 'A.I Mini Project #3: Bigrams & Unigrams',
    course: 'COMP 472',
    courseName: 'Artificial Intelligence',
    description:
      'This was our third of three projects for this class that we completed in ' +
      "teams of two. We were given two training corpus' in English and French and told to " +
      'train our models on those then predict the most likely language for some test sentences.',
    chips: [
      { key: 0, label: 'A.I' },
      { key: 1, label: 'Classification' },
      { key: 2, label: 'Python' },
      { key: 3, label: 'NLP' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/COMP472_MP3',
        name: 'repo'
      }
    ],
    docs: {
      problemStatement: {
        file: ai_mp3,
        pages: 1
      },
      report: {
        file: ai_mp3_r,
        pages: 8
      }
    }
  },
  {
    tags: [DATA_SCIENCE, ALL],
    title: 'A.I Mini Project #1: 11-puzzle',
    course: 'COMP 472',
    courseName: 'Artificial Intelligence',
    description:
      'This was our first of three projects for this class that we completed in ' +
      'teams of two. We solved a variation of the 8-puzzle using different heuristics. ' +
      'I was responsible for the DFS and A* parts.',
    chips: [
      { key: 0, label: 'A.I' },
      { key: 1, label: 'Heuristics' },
      { key: 2, label: 'Python' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/AI_proj1',
        name: 'repo'
      }
    ],
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
    tags: [ALL],
    title: 'Auction System Client & Server',
    course: 'COEN 445',
    courseName: 'Communication Networks and Protocols',
    description:
      'This was my first attempt to use sockets. We were a group of three' +
      ' and I was responsible for everything UDP and also the very rudimentary GUI. ' +
      'My teammates had a late start on the TCP parts so we were really rushed to ' +
      ' finish but for the most part it works and was a good introduction to sockets for' +
      ' me as well as great practice using the producer consumer model and multiple threads.',
    chips: [
      { key: 0, label: 'Networking' },
      { key: 1, label: 'Socket Programming' },
      { key: 2, label: 'Python' },
      { key: 3, label: 'Multithreading' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/CLIENT',
        name: 'client'
      },
      {
        link: 'https://github.com/Scabandari/SERVER',
        name: 'server'
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

  {
    tags: [DATA_SCIENCE, ALL],
    title: 'Wedding Seating Plan',
    course: 'COEN 432',
    courseName: 'Applied Evolutionary & Learning Algorithms',
    description:
      'This was our first of two assignments and a very quick dive into the ' +
      'basics of Evolutionary Algorithms which are quite interesting and useful.' +
      ' It was after taking this course I felt completely comfortable doing anything ' +
      'in Python3.',
    chips: [
      { key: 0, label: 'A.I' },
      { key: 1, label: 'Heuristics' },
      { key: 2, label: 'Python' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/Wedding_Seating_Plan',
        name: 'repo'
      }
    ],
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
    tags: [WEB_DEV, ALL],
    title: 'Perfect Port',
    course: 'Side Project',
    courseName: 'Crypto Portfolio Tracker',
    description:
      'Last spring I decided to learn web dev. I have never used Javascript ' +
      'before so this first attempt might be a little rough around the edges. ' +
      'I took a couple courses on Udemy to learn NodeJs and React and I feel like I learned ' +
      'a ton in a really short time frame.',
    chips: [
      { key: 0, label: 'NodeJs' },
      { key: 1, label: 'React' },
      { key: 2, label: 'react-redux' },
      { key: 3, label: 'Material-UI' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/perfectPort',
        name: 'repo'
      }
    ],
    docs: {
      problemStatement: {
        file: perfectPort,
        pages: 1
      },
      report: {
        file: perfectPort_r,
        pages: 2
      }
    }
  },
  {
    tags: [DATA_SCIENCE, ALL],
    title: 'Eternity 2',
    course: 'COEN 432',
    courseName: 'Applied Evolutionary & Learning Algorithms',
    description:
      'This was the main project for this course. It was an individual project ' +
      'and we had to arrange board pieces in a similar manner to the official game ' +
      'Eternity 2. Our goal was to come up with a heuristic to solve the game or come as ' +
      'possible.',
    chips: [
      { key: 0, label: 'Heuristics' },
      { key: 1, label: 'Python' },
      { key: 2, label: 'Evolutionary Algorithms' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/Eternity2',
        name: 'repo'
      }
    ],
    docs: {
      problemStatement: {
        file: eternity,
        pages: 4
      },
      report: {
        file: eternity_r,
        pages: 8
      }
    }
  },
  {
    tags: [WEB_DEV, ALL],
    title: 'Assignment 1 Contract Management System',
    course: 'COMP 353',
    courseName: 'Databases',
    description:
      'We were to develop a database for a contract management system ' +
      'and populate the tables with some data to work with and perform queries in MySql.' +
      'This was my first time working with SQL. I mostly use mongoDb these days but I also' +
      ' like working with SQL.',
    chips: [
      { key: 0, label: 'Database Management' },
      { key: 1, label: 'SQL' },
      { key: 2, label: 'MySql' }
    ],
    github_repos: [
      {
        link: 'https://github.com/Scabandari/COM353_ASS1',
        name: 'repo'
      }
    ],
    docs: {
      problemStatement: {
        file: db_ass1,
        pages: 1
      },
      report: {
        file: db_ass1_r,
        pages: 29
      }
    }
  }
];

// const sortedData = {
//   [ALL]: data,
//   [WEB_DEV]: data.filter(obj => {
//     return obj.tags.includes(WEB_DEV);
//   }),
//   [DATA_SCIENCE]: data.filter(obj => {
//     return obj.tags.includes(DATA_SCIENCE);
//   }),
//   [BASH]: data.filter(obj => {
//     return obj.tags.includes(BASH);
//   })
// };

export default data;
