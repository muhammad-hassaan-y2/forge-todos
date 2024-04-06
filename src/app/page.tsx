"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { AlignRight, X } from 'lucide-react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // Assuming you still want to start with 30% for the resizable panel when it's opened
  const [bottomPanelSize, setBottomPanelSize] = useState(30);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    // Optionally reset the bottom panel size when toggling
  }

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='font-bold text-3xl mb-4'>Hi, Here is the Shadcn UI component</h1>
      
      <div className="flex flex-col items-center w-4/6">
        {/* Resizable Panel Group */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] rounded-lg border flex-1"
        >
          <ResizablePanel defaultSize={isOpen ? 65 : 100}> {/* Adjust size based on whether the bottom panel is open */}
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Upward</span>
            </div>
          </ResizablePanel>
          {isOpen && (
            <React.Fragment>
              <ResizableHandle />
              <ResizablePanel defaultSize={bottomPanelSize}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Downward</span>
                </div>
              </ResizablePanel>
            </React.Fragment>
          )}
        </ResizablePanelGroup>

        {/* Toggle Button */}
        <div 
          className='mt-4 cursor-pointer self-end' // Adjust margin as needed
          onClick={handleIsOpen}
        >                   
          {isOpen ? <X size={35}/> : <AlignRight size={35}/>}
        </div>
      </div>
    </div>
  );
}