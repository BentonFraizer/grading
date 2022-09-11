import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { siteProcess } from './site-process/site-process';
import { siteData } from './site-data/site-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: siteData.reducer,
  [NameSpace.Site]: siteProcess.reducer,
});
