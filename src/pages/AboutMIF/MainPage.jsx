import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MainCard from '../../components/AboutMIFPageComp/MainCard';


export default function ColorTabs({tab}) {
  const [value, setValue] = React.useState('none');
React.useEffect(()=>{
    if(tab)
        {

            console.log("tabs",tab);
            setValue(tab);
          
        }
},[tab])
  const handleChange = (event, newValue) => {

    setValue(newValue);
  };

  // Render content based on the selected tab
const renderContent = () => {
    switch (value) {
      case 'history':
        return <div>Content for Item history</div>;
      case 'vision':
        return <div>Content for Item Two</div>;
      case 'international_collabration':
        return <div>Content for Item Three</div>;
        case 'events':
            return <div>Content for Item four</div>;
            case 'campuses':
                return <div>Content for Item five</div>;
      default:
        return <div>Select a tab to see the content</div>;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
        {/* <MainCard/> */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
          variant="scrollable"
  scrollButtons="auto"
        aria-label="secondary tabs example"
      >
        <Tab value="history" label="History" />
        <Tab value="vision" label="Vision and Mission" />
        <Tab value="international_collabration" label="International Collabration" />
        <Tab value="events" label="Events" />
        <Tab value="campuses" label="Campuses" />
      </Tabs>
      {/* content based on tab selection */}
      <Box sx={{ padding: 5}}>
        {renderContent()}
      </Box>
    </Box>
  );
}
