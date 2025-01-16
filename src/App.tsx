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
        <div className="p-6 max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold mb-6">Potion Shop</h1>
          
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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

          <div className='space-y-4'>
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


