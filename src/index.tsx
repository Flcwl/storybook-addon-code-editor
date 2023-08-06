import type { StoryEntry } from '@storybook/api';
import * as React from 'react';
import { createStore } from './createStore';
import Editor from './Editor/Editor';
import ErrorBoundary from './ErrorBoundary';
import Preview from './Preview';
import { GLOBAL_VARIABLES_KEY } from './Editor/setGlobalVariables';
export { setupMonaco } from './Editor/setupMonaco';
import { parseFile } from './parse';

interface StoryState {
  code: string;
  availableImports?: Record<string, Record<string, unknown>>;
  modifyEditor?: React.ComponentProps<typeof Editor>['modifyEditor'];
}

const store = createStore<StoryState>();
const hasReactRegex = /import\s+(\*\s+as\s+)?React[,\s]/;

function LivePreview({ storyId, storyArgs }: { storyId: string; storyArgs?: any }) {
  const [state, setState] = React.useState(store.getValue(storyId));

  const [globalVariables, setGlobalVariables] = React.useState<any>(
    store.getValue(GLOBAL_VARIABLES_KEY)
  );

  const errorBoundaryResetRef = React.useRef<() => void>();
  const fullCode = hasReactRegex.test(state!.code)
    ? state!.code
    : "import * as React from 'react';" + state!.code;

  React.useEffect(() => {
    return store.onChange(storyId, (newState) => {
      setState(newState);
      errorBoundaryResetRef.current?.();
    });
  }, [storyId]);

  React.useEffect(() => {
    return store.onChange(GLOBAL_VARIABLES_KEY, (newState) => {
      setGlobalVariables(newState);
    });
  }, []);

  if (!globalVariables) return null;

  return (
    // @ts-ignore
    <ErrorBoundary resetRef={errorBoundaryResetRef}>
      <Preview
        availableImports={{ react: React, ...globalVariables, ...state!.availableImports }}
        code={fullCode}
        componentProps={storyArgs}
      />
    </ErrorBoundary>
  );
}

export function createStory(options: StoryState) {
  if (typeof options === 'string') {
    options = { code: options };
  }

  const id = `id_${Math.random()}`;

  store.setValue(id, options);

  const { name, storyName, description } = parseFile(options.code);

  const storyObj: Record<string, any> = {
    [name]: (storyArgs: any) => <LivePreview storyId={id} storyArgs={storyArgs} />,
  };

  if (storyName) {
    storyObj[name].storyName = storyName;
  }

  storyObj[name].parameters = {
    liveCodeEditor: {
      disable: false,
      id,
    },
    docs: {
      transformSource: (code: string) => options.code ?? store.getValue(id)?.code ?? code,
    },
  };

  if (description) {
    storyObj[name].parameters.docs.description = { story: `> ${description}` };
  }

  return storyObj[name];
}

export { setGlobalVariables } from './Editor/setGlobalVariables';
