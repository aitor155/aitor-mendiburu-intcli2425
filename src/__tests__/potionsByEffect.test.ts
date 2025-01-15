import { potions } from "../data/data";
import { findPotionByEffect } from "../helpers/potionHelpers";

  describe('findPotionByEffect', () => {
    it('should return potions with specified secondary effect', () => {
      const result = findPotionByEffect(potions, "healthRegeneration");
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBe("Elixir of Eternal Flame");
    });

    it('should return empty array when no potions have specified effect', () => {
      const result = findPotionByEffect(potions, "noEffect");
      expect(result).toHaveLength(0);
    });
  });

