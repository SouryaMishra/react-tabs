import { useState } from "react";
import "./App.scss";
import { TabGroup, Tabs, Tab, TabPanel } from "./components";

function App() {
  const [value, setValue] = useState<number | string>(1);
  return (
    <div className="App">
      <TabGroup value={value} onChange={(value) => setValue(value)}>
        <Tabs>
          <Tab value={1}>Tab 1</Tab>
          <Tab value={2}>Tab 2</Tab>
          <Tab value={3}>Tab 3</Tab>
        </Tabs>
        <TabPanel value={1}>Tab 1 Content</TabPanel>
        <TabPanel value={2}>Tab 2 Content</TabPanel>
        <TabPanel value={3}>Tab 3 Content</TabPanel>
      </TabGroup>
    </div>
  );
}

export default App;
