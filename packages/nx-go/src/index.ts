import { NxPlugin } from '@nx/devkit';
import { createDependencies } from './graph/create-dependencies';
import { createNodes } from './graph/create-nodes';

const plugin: NxPlugin = {
  name: '@gondominium/nx-go',
  createDependencies,
  createNodes,
};

export = plugin;
