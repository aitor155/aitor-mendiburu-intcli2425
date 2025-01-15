import { FC, useState } from 'react'
import './App.css'
import PotionCard from './components/PotionCard';
import { potions } from './data/data';
import PotionModal from './components/PotionModal';



const App: FC = () => {
      const [selectedPotion, setSelectedPotion] = useState(null);
    
      return (
        <div className="p-6 max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold mb-6">Potion Shop</h1>
          
          {/* Container with mouse wheel scrolling */}
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="flex flex-nowrap gap-4 min-w-min">
              {potions.map((potion: unknown) => (
                <PotionCard
                  key={potion.id}
                  potion={potion}
                  onClick={() => setSelectedPotion(potion)}
                />
              ))}
            </div>
          </div>
    
          {/* Modal */}
          {selectedPotion && (
            <PotionModal
              potion={selectedPotion}
              onClose={() => setSelectedPotion(null)}
            />
          )}
        </div>
      );
    };

export default App;


