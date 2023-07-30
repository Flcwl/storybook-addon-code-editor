import { createStore } from '../createStore';

interface GlobalVariables {
}

const store = createStore<GlobalVariables>();

export const GLOBAL_VARIABLES_KEY = 'STORYBOOK_LIVE_CODE_EDITOR@GLOBAL_VARIABLES'

export function setGlobalVariables(globalVariables: any) {
  store.setValue(GLOBAL_VARIABLES_KEY, globalVariables);
}

export function getGlobalVariables() {
  return store.getValue(GLOBAL_VARIABLES_KEY) || {};
}
