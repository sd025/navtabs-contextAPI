import { createContext, useContext } from 'react';
import './Tab.css';
const TabContext = createContext();

export default function Tab({ currTab, onChange, children }) {
  return (
    <>
      <div>
        <TabContext.Provider value={{ currTab, onChange }}>
          {children}
        </TabContext.Provider>
      </div>
    </>
  );
}

Tab.HeadsContainer = ({ children }) => {
  return <div className="nav">{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  const { currTab, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`item ${index === currTab ? 'active' : null}`}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tab.ContentItem = ({ index, children }) => {
  const { currTab } = useContext(TabContext);
  return currTab === index ? <div>{children}</div> : null;
};
