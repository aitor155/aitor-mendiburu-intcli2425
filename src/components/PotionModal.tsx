import { Potion } from "../types/Potion";
type ModalProps = {
    potion: Potion,
    onClose: () => void,
}

const PotionModal: React.FC<ModalProps> = ({ potion, onClose }) => {
  if (!potion) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10 ">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative bg-blue-200">
        <button 
          onClick={onClose}
          className="text-3xl font-bold absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Duration Crafting</h3>
            <p className="text-gray-600">{potion.crafting.time.amount}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Usage Instructions</h3>
            <p className="text-gray-600">{potion.usage.instructions}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-600 float-center">
              {potion.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name} with location {ingredient.origin.location} and region {ingredient.origin.region}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Primary Effects</h3>
            <ul className="list-none list-inside text-gray-600">
                <li>{potion.effects.primary.attribute}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Secondary Effects</h3>
            <ul className="list-none list-inside text-gray-600">
              {potion.effects.secondary.map((effect, index) => (
                <li key={index}>{effect.attribute}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 ">Restrictions</h3>
            <ul className="list-disc list-inside text-gray-600">
                <li>LevelRequired: {potion.usage.restrictions.levelRequirement}</li>
                <li>ClassRestricion: {potion.usage.restrictions.classRestrictions.map((restriction) => (
                restriction + ", "
              ))}
                </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PotionModal