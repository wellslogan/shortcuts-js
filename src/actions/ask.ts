import { withActionOutput } from '../utils';

import WFInputType from '../interfaces/WF/WFInputType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Ask for Input Action. Displays a dialogue prompting the user to enter a piece of information.
 *
 * ```js
 * // Ask for favourite colour, defaulting to pink
 * ask({
 *   defaultAnswer: 'Pink',
 *   question: 'What is your favourite colour?'
 * });
 * ```
 */
const ask = (
  options: {
    /** The type of input to accept */
    inputType?: WFInputType;
    /** The default answer */
    defaultAnswer?: WFSerialization | string;
    /** The title of the dialogue */
    question?: WFSerialization | string;
  },
): WFWorkflowAction => {
  const {
    inputType = 'Text',
    defaultAnswer = '',
    question = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.ask',
    WFWorkflowActionParameters: {
      WFInputType: inputType,
      WFAskActionDefaultAnswer: defaultAnswer,
      WFAskActionPrompt: question,
    },
  };
};

export default withActionOutput(ask);
