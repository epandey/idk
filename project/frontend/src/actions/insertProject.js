import axios from 'axios';
import { setAlert } from './alert';

import { INSERT_PROJECT, INSERT_PROJECT_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const insertProject =
  (
    mcsNumber,
    warehouse,
    projectItem,
    projectClass,
    manager,
    supervisor,
    projectStage,
    projectStatus,
    projectType,
    customerApproval,
    autoFillHVAC,
    autoFillPermits,
    autoFillRefrigeration,
    keyStatus,
    scope,
    mcsNotes,
    projectInitiatedDate,
    siteSurveyDate,
    budgetaryDueDate,
    budgetarySubmittedDate,
    proposalScopeDate,
    draftScheduleDate,
    proposalDueDate,
    proposalSubmittedDate,
    scheduledStartDate,
    scheduledTurnoverDate,
    actualTurnoverDate,
    shouldInvoice,
    actualInvoice,
    projectCost,
    customerNumber
  ) =>
  async (dispatch) => {
    console.log('insertProject called');
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify({
        mcsNumber,
        warehouse,
        projectItem,
        projectClass,
        manager,
        supervisor,
        projectStage,
        projectStatus,
        projectType,
        customerApproval,
        autoFillHVAC,
        autoFillPermits,
        autoFillRefrigeration,
        keyStatus,
        scope,
        mcsNotes,
        projectInitiatedDate,
        siteSurveyDate,
        budgetaryDueDate,
        budgetarySubmittedDate,
        proposalScopeDate,
        draftScheduleDate,
        proposalDueDate,
        proposalSubmittedDate,
        scheduledStartDate,
        scheduledTurnoverDate,
        actualTurnoverDate,
        shouldInvoice,
        actualInvoice,
        projectCost,
        customerNumber,
      });
      console.log(body);
      const res = await axios.post(
        'http://localhost:3000/api/projects/insert',
        body,
        config
      );
      //after getting results in res variable send it to reducer with the data as payload
      dispatch({
        type: INSERT_PROJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: INSERT_PROJECT_ERROR,
        payload: { msg: err.response.statusText, staus: err.response.status },
      });
    }
  };
