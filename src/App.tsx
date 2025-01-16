import { FC, useEffect, useState } from 'react'
import './App.css'
import PotionCard from './components/PotionCard';
import { potions } from './data/data';
import PotionModal from './components/PotionModal';
import { Potion } from './types/Potion';
import PotionFilter from './components/PotionFilter';



const App: FC = () => {
      const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);
      const [potionsToShow, setPotionsToShow] = useState<Potion[]>(potions);

      useEffect(() => {console.log(potionsToShow)});

      return (
        <div className="p-6 max-w-[1200px] mx-auto bg-gray-300">
          
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {(potionsToShow.length === 0) && (
              <div className='h-full'>
                <p className="">NO POTIONS</p>
              </div>
               
            )}
            <div className="flex flex-nowrap gap-4 min-w-min">
              {potionsToShow.map((potion: Potion) => (
                <PotionCard
                  key={potion.id}
                  potion={potion}
                  onClick={() => setSelectedPotion(potion)}
                />
              ))}
            </div>
          </div>
    
          {selectedPotion && (
            <PotionModal
              potion={selectedPotion}
              onClose={() => setSelectedPotion(null)}
            />
          )}

          <h1 className='text-3xl font-bold p-8'>FILTER</h1>

          <div className='inline-block space-y-4 p-6 max-w-[1200px] mx-auto bg-blue-300'>
            <PotionFilter
              potionsData={potions}
              changePotion={setPotionsToShow}
              potionsToShow={potionsToShow}
            />
          </div>
        </div>
      );
    };

export default App;


