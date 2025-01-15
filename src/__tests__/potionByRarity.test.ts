import { potions } from "../data/data";
import { getPotionsByRarity } from "../helpers/potionHelpers";

describe('getPotionsByRarity', () => {
    it('should return potions with specif rarity', () => {
      const result = getPotionsByRarity(potions, "legendary");
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBe("Elixir of Eternal Flame");
    });

    it('should return empty array if potions not go with the rarity', () => {
      const result = getPotionsByRarity(potions, "nonExistent");
      expect(result).toHaveLength(0);
    });
});