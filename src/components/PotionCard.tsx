import { Potion } from "../types/Potion";

type CardProps = {
    potion: Potion,
    onClick: () => void,
}

const PotionCard: React.FC<CardProps> = ({ potion, onClick }) => (
    <div 
      className="flex-shrink-0 w-64 p-4 m-2 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
    >
    <img className="w-full h-64 object-cover mt-4" src={potion.image}/>
      <h3 className="text-xl font-bold text-center mb-2">{potion.name}</h3>
      <p className="text-gray-600 text-center">{potion.rarity}</p>
      <p className="text-right mt-2 font-semibold">{}</p>
      <button className="text-gray-500 hover:text-gray-700" onClick={onClick}>MORE DETAILS</button>
    </div>
  );

export default PotionCard
