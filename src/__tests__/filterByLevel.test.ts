  import { filterByLevelRequirement } from "../helpers/potionHelpers";
  import { potions } from "../data/data";
  
  describe('filterByLevelRequirement', () => {
    it('should return potions with the needed level', () => {
      const result = filterByLevelRequirement(potions, 10);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBe("Elixir of Eternal Flame");
    });

    it('should return empty array if no enough level', () => {
      const result = filterByLevelRequirement(potions, 1000);
      expect(result).toHaveLength(0);
    });
  });