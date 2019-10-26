/* eslint-disable prefer-destructuring */
import { DecoratorFunction } from '@storybook/addons';
import Preview from './preview';

const preview = new Preview();

const framework = 'react-native';
const rawStoriesOf = preview.api().storiesOf.bind(preview);
export const storiesOf = (...args: any[]) => rawStoriesOf(...args).addParameters({ framework });

const rawAddDecorator = preview.api().addDecorator.bind(preview);
export const addDecorator = (decorator: DecoratorFunction) => rawAddDecorator(decorator, framework);

export const setAddon = preview.api().setAddon.bind(preview);
export const addParameters = preview.api().addParameters.bind(preview);
export const clearDecorators = preview.api().clearDecorators.bind(preview);
export const configure = preview.configure;
export const getStorybook = preview.api().getStorybook.bind(preview);
export const getStorybookUI = preview.getStorybookUI;
export const raw = preview.api().raw.bind(preview);
