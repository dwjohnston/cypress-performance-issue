
import React, { useState } from 'react';

export type TabsPageProps = {
};

const tabs = ["foo", "bar", "biz"] as const; 

/**
 * A custom tabs implmentation for the purpose of demonstrating this issue
 * @param props 
 * @returns 
 */
export const TabsPage = (props: TabsPageProps) => {
  const {  } = props;


    const [currentTab, setCurrentTab] = useState("foo" as typeof tabs[number]); 


  return (
    <div>

        <div role='tablist' className ="tabslist">
                {tabs.map((v) => {
                        return <div className ={`tab ${v===currentTab? 'tab-selected' : ''}`} role ="tab" aria-selected={v === currentTab} onClick ={() => setCurrentTab(v)}>{v}</div>
                })}
        </div>

        <div>
            {currentTab} CONTENT
        </div>
      
    </div>
  );
};
