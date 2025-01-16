import { useEffect, useState } from "react";
import { Potion } from "../types/Potion";
import { calculateCraftingTime, filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from "../helpers/potionHelpers";

type ModalProps = {
    potionsData: Potion[]
    changePotion: (potions: Potion[]) => void
    potionsToShow: Potion[]
}
////pass argument setPotions to show others in general app
const PotionFilter: React.FC<ModalProps> = ({ potionsData, changePotion, potionsToShow }) => {

    const [seletectedLevel, setSelectedLevel] = useState<number>(0);
    const [selectedRarity, setSelectedRarity] = useState<string>("");
    const [selectedEffect, setSelectedEffect] = useState<string>("");
    const [craftingTime, setCraftingTime] = useState<number>(0);
    const options = [
        { label: ' ', value: ' ' },
        { label: 'legendary', value: 'legendary' },
        { label: 'epic', value: 'epic' },
        { label: 'mythic', value: 'mythic' },
      ];

      useEffect(() => { //////use Ref for change of inmediate 
        let potionsToShow: Potion[] = potionsData;
        let potionsByLevel: Potion[] = [];
        let potionsByRarity: Potion[] = [];
        let potionsByEffect: Potion[] = [];

        if(seletectedLevel > 30) {potionsToShow=[]}
        potionsByLevel = filterByLevelRequirement(potionsToShow, seletectedLevel);
        if(potionsByLevel.length > 0) {
            potionsToShow = potionsByLevel
        }
            

        if(selectedRarity != " "){
        potionsByRarity = getPotionsByRarity(potionsToShow, selectedRarity);
        if(potionsByRarity.length > 0) {potionsToShow = potionsByRarity};}


        potionsByEffect = findPotionByEffect(potionsToShow, selectedEffect)
        if(potionsByEffect.length > 0) {potionsToShow = potionsByEffect}

        changePotion(potionsToShow)
        setCraftingTime(0)

      },[potionsData, changePotion, selectedRarity, seletectedLevel, selectedEffect])


      const totalCraftingTime = () => {
        console.log("potionsToShow: " + potionsToShow);
        const craftingTime: number = calculateCraftingTime(potionsToShow)
        setCraftingTime(craftingTime)
      }

    return (
        <div>
         <div>
            {/* LEVEL FILTER */}
            <h1>LEVEL</h1>
            <input
                type="range"
                min="0"
                max="100"
                value={seletectedLevel}
                onChange={(e) => setSelectedLevel(Number(e.target.value))}
                placeholder="LEVEL"
                className="border p-2 w-70"
                required />
            <p className="text-gray-600 text-center">{seletectedLevel}</p>
        </div>
        
        {/* RARITY FILTER */}
        <div>
        <h1>RARITY</h1>
          <select value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
       
      </div>

        {/* EFFECT FILTER */}
        <input
        type="text"
        value={selectedEffect}
        onChange={(e) => setSelectedEffect(e.target.value)}
        placeholder="Secondary effect"
        className="border p-2 w-100"
        required
      />


    {/* CRAFTING FILTER */}
      <div>
      <button className="relative" onClick={totalCraftingTime}>
            CRAFTING TIME
        </button>
        
      <p className="text-gray-600 text-center">{craftingTime}</p>
      </div>

    </div>  
    );
}

export default PotionFilter