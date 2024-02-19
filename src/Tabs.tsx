import styled from 'styled-components';
import {
  Tabs as MUITabs,
  TabPanel as MUITabPanel,
  Tab as MUITab,
  TabsList as MUITabsList,
} from '@mui/base';
import { Colors } from './Colors';

export const Tabs = styled(MUITabs)``;

export const TabPanel = styled(MUITabPanel)``;

export const TabsList = styled(MUITabsList)`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Tab = styled(MUITab)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 5px solid rgba(0, 0, 0, 0);
  border-radius: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 12px;
  margin-right: 40px;
  cursor: pointer;
  transition: border-bottom 0.25s ease-in-out;

  &.base--selected {
    border-bottom: 5px solid ${Colors.pink};
  }

  &.base--disabled {
    cursor: not-allowed;
    color: ${Colors.monoGrayTwo};
  }
`;
