import { createContext, useContext, useState, ReactNode } from 'react';
import { SampleData, generateSampleData } from '@/lib/sampleData.ts';

interface SampleDataContextType {
  sampleData: SampleData | null;
  setCompanyName: (companyName: string) => void;
  companyName: string;
}

const SampleDataContext = createContext<SampleDataContextType | undefined>(undefined);

export function SampleDataProvider({ children }: { children: ReactNode }) {
  const [companyName, setCompanyNameState] = useState('');
  const [sampleData, setSampleData] = useState<SampleData | null>(null);

  const setCompanyName = (name: string) => {
    setCompanyNameState(name);
    const data = generateSampleData(name);
    setSampleData(data);
  };

  return (
    <SampleDataContext.Provider value={{
      sampleData,
      setCompanyName,
      companyName
    }}>
      {children}
    </SampleDataContext.Provider>
  );
}

export function useSampleData() {
  const context = useContext(SampleDataContext);
  if (context === undefined) {
    throw new Error('useSampleData must be used within a SampleDataProvider');
  }
  return context;
}
