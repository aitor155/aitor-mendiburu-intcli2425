import { potions } from "../data/data";
import { calculateCraftingTime } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";
const listPotions: Potion[] = [potions[0], potions[1]]
  describe('calculateCraftingTime', () => {
    it('should return correct crafting time', () => {
      const result = calculateCraftingTime(listPotions);
      expect(result).toBe(105); //45 + 60
    });
  });