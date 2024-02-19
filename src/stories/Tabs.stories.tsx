import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import { Tab, Tabs, TabsList } from '../Tabs';
import * as React from 'react';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const StoryBookTabs = () => {
  const [tab, setTab] = React.useState<string>('one');

  const handleChange = (
    _: React.SyntheticEvent<Element, Event> | null,
    newTab: string | number | null
  ) => {
    setTab(newTab as string);
  };

  return (
    <Container>
      <Tabs defaultValue={'one'} value={tab} onChange={handleChange}>
        <TabsList>
          <Tab value={'one'}>Tab One</Tab>
          <Tab value={'two'}>Tab Two</Tab>
          <Tab value={'three'} disabled={true}>
            Tab Three
          </Tab>
        </TabsList>
      </Tabs>
    </Container>
  );
};

const meta: Meta = {
  title: 'Example/Tabs',
  component: StoryBookTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
