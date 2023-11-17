import { createContext, useContext, useState } from 'react'

const ProviderData = createContext();

export const ExportData = ({children}) => {
    const [currentview,setCurrentview] = useState('');
    const [selectedplanMonth,setSelectedplanmonth] = useState({});
    const [pickadd,setPickadd] = useState([]);
    return (
      <ProviderData.Provider
        value={{
          currentview,
          setCurrentview,
          selectedplanMonth,
          setSelectedplanmonth,
          pickadd,
          setPickadd,
        }}
      >
        {children}
      </ProviderData.Provider>
    );
};

export const useData = () => {

    return useContext(ProviderData);

}
