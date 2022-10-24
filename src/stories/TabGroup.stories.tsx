import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Tab, TabGroup, TabPanel, Tabs } from "../components";

export default {
  title: "TabGroup",
  component: TabGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "fullscreen",
  },
} as ComponentMeta<typeof TabGroup>;

const Template: ComponentStory<typeof TabGroup> = (args) => {
  const [value, setValue] = useState<number | string>(1);
  return (
    <TabGroup {...args} value={value} onChange={(value, e) => setValue(value)}>
      <Tabs>
        <Tab value={1}>Tab 1</Tab>
        <Tab value={2}>Tab 2</Tab>
        <Tab value={3}>Tab 3</Tab>
      </Tabs>
      <TabPanel value={1}>Tab 1 Content</TabPanel>
      <TabPanel value={2}>Tab 2 Content</TabPanel>
      <TabPanel value={3}>Tab 3 Content</TabPanel>
    </TabGroup>
  );
};

export const Default = Template.bind({});

Default.args = {
  className: "custom",
};
