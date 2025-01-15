// import { Ingredient } from "../types/Ingredient";
import { Potion } from "../types/Potion";

export function filterByLevelRequirement (potions: Potion[], level: number) { //:Potion[] para el return
    let potionsArray: Potion[] = [];
    potionsArray = potions.filter((potion) => potion.usage.restrictions.levelRequirement >= level)
    return potionsArray;
}

export function getPotionsByRarity(potions: Potion[], rarity: string) {
    let potionsArray: Potion[] = [];
    potionsArray = potions.filter((potion) => potion.rarity === rarity);
    return potionsArray;
  }

export function listIngredients(potion: Potion) {
    let ingredientsOfPotion : string[] = [];
    ingredientsOfPotion = potion.ingredients.map((ingredient) => ingredient.name);
    return ingredientsOfPotion
  }

export function findPotionByEffect(potions: Potion[], effect: string) {
    const potionsWithEffect : Potion[] = [];

    for (let i = 0; i < potions.length; ++i) {
      for (let j = 0; j < potions[i].effects.secondary.length; ++j) {
        if(potions[i].effects.secondary[j].attribute === effect) {
          potionsWithEffect.push(potions[i])
        }
      }
    }

    return potionsWithEffect
  }

export function calculateCraftingTime(potions: Potion[]){
    let totalTime: number = 0;
    totalTime = potions.reduce((total, potion) => total + potion.crafting.time.amount, 0);
    return totalTime
}