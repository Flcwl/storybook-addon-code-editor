import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';
import { addonId, panelId, paramId } from './constants';
import { createStore } from './createStore';
import Editor from './Editor/Editor';
import type { createStory } from './index';

type StoryState = Parameters<typeof createStory>[0];

const store = createStore<StoryState>();

export function register() {
  addons.register(addonId, (api) => {
    addons.addPanel(panelId, {
      title: 'Playground',
      type: types.PANEL,
      paramKey: paramId,
      render({ active, key }) {
        const storyId = (api.getCurrentStoryData()?.parameters as any)?.liveCodeEditor?.id || '';

        if (!active || !storyId) {
          return null as any;
        }

        const storyState = store.getValue(storyId)!;
        return (
          <AddonPanel active={true} key={key}>
            <Editor
              {...storyState}
              onInput={(newCode) => {
                store.setValue(storyId, { ...storyState, code: newCode });
              }}
              value={storyState.code}
              parentSize="100%"
            />
          </AddonPanel>
        );
      },
    });
  });
}
