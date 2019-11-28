import { CHANGE_PROJECT, CHANGE_PROJECTS_FILTER_TERM } from '../actions/types';
import { cloud, cloud_report } from '../components/Projects/PDFs/pdf_files';
import { ALL } from '../components/Projects/constants';

// const INITIAL_STATE = {
//     project_key: 'SENTIMENT_ANALYSIS'
// };

const INITIAL_STATE = {
  project: {
    problemStatement: {
      file: cloud,
      pages: 5
    },
    report: {
      file: cloud_report,
      pages: 7
    }
  },
  projectsFilterTerm: ALL
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_PROJECT:
      return { ...state, project: action.payload };
    case CHANGE_PROJECTS_FILTER_TERM:
      return { ...state, projectsFilterTerm: action.payload };
    default:
      return state;
  }
};

