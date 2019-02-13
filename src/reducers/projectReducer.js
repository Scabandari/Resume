import { CHANGE_PROJECT } from '../actions/types';
import {cloud, cloud_report} from "../components/Projects/PDFs/pdf_files";

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
    }
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_PROJECT:
            return {...state, project: action.payload};
        default:
            return state;
    }
}

// export default (state=INITIAL_STATE, action) => {
//     switch(action.type) {
//         case CHANGE_PROJECT:
//             return {...state, project_key: action.payload};
//         default:
//             return state;
//     }
// }