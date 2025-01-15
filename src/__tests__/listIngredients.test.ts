import { potions } from "../data/data";
import { listIngredients } from "../helpers/potionHelpers";

  describe('listIngredients', () => {
    it('should return array with correct name of ingredients of the potion', () => {
      const result = listIngredients(potions[0]);
      expect(result).toEqual(["Phoenix Feather", "Molten Ember", "Flameflower Extract"]);
    });
  });