import { createSelector } from 'reselect';

const selectDirect = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirect],
  (directory) => directory.sections
);
