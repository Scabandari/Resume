import React, { Fragment } from 'react';
import { Chip } from '@material-ui/core';

import * as Constants from '../../constants';

const tech_chips = {
  javascript: [
    { key: 0, label: Constants.NODE_JS },
    { key: 1, label: Constants.REACT },
    { key: 3, label: Constants.ES6 }
  ],
  python: [
    { key: 0, label: Constants.SOCKETS },
    { key: 1, label: Constants.THREADS },
    { key: 2, label: Constants.DATA_SCIENCE },
    { key: 3, label: Constants.PY_SPARK },
    { key: 4, label: Constants.MACHINE_LEARNING },
    { key: 5, label: Constants.AI },
    { key: 6, label: Constants.PANDAS }
  ],
  git: [{ key: 0, label: Constants.GITHUB }],
  java: [
    { key: 0, label: Constants.ANDROID },
    { key: 1, label: Constants.MOBILE }
  ],
  cpp: [
    { key: 0, label: Constants.FIRST_LOVE },
    { key: 1, label: Constants.BLOCK_CHAIN },
    { key: 2, label: Constants.EOSIO }
  ],
  sql: [
    { key: 0, label: Constants.MYSQL },
    { key: 1, label: Constants.COMP_353 }
  ],
  machine_learning: [
    { key: 0, label: Constants.PYTHON3 },
    { key: 1, label: Constants.AI },
    { key: 2, label: Constants.KERAS },
    { key: 3, label: Constants.ANN },
    { key: 4, label: Constants.DEEP_LEARNING },
    { key: 5, label: Constants.PANDAS }
  ],
  block_chain: [
    { key: 0, label: Constants.SCALABILITY },
    { key: 1, label: Constants.EOSIO },
    { key: 2, label: Constants.EOS }
  ],
  cloud: [
    { key: 0, label: Constants.NODE_JS },
    { key: 1, label: Constants.REACT },
    { key: 2, label: Constants.AWS_EC2 },
    { key: 3, label: Constants.AWS_S3 },
    { key: 4, label: Constants.AWS_ROUTE53 }
  ],
  css: [{ key: 0, label: Constants.SASS }],
  bash: [
  { key: 0, label: Constants.SCRIPTING},
  { key: 1, label: Constants.AUTOMATION},
  ]
};

export default tech_chips;
