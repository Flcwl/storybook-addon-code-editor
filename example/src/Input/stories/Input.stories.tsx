import { createLiveEditStory } from 'storybook-addon-live-code-editor';
import * as ExampleLibrary from '../../index';
import InputTsSource from './editableStory.source.tsx?raw';

export default {
  title: 'Stories/Input',
  component: ExampleLibrary.Input,
};

export const EditableStory = createLiveEditStory({
  availableImports: { 'example-library': ExampleLibrary },
  code: InputTsSource,
});
