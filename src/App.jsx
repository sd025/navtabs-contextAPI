import { useState } from 'react';
import './App.css';
import Tab from './Tab';

function App() {
  const [currActive, setCurrActive] = useState(1);
  function handleChange(newId) {
    setCurrActive(newId);
  }
  return (
    <>
      <div>
        <Tab currTab={currActive} onChange={handleChange}>
          <Tab.HeadsContainer>
            <Tab.Item label="Tab1" index={1}></Tab.Item>
            <Tab.Item label="Tab2" index={2}></Tab.Item>
            <Tab.Item label="Tab3" index={3}></Tab.Item>
            <Tab.Item label="Tab4" index={4}></Tab.Item>
          </Tab.HeadsContainer>
          <Tab.ContentContainer>
            <Tab.ContentItem index={1}>
              <h1>content1</h1>
            </Tab.ContentItem>
            <Tab.ContentItem index={2}>
              <h1>content2</h1>
            </Tab.ContentItem>
            <Tab.ContentItem index={3}>
              <h1>content3</h1>
            </Tab.ContentItem>
            <Tab.ContentItem index={4}>
              <h1>content4</h1>
            </Tab.ContentItem>
          </Tab.ContentContainer>
        </Tab>
      </div>
    </>
  );
}

export default App;
