import { Crafting } from "./Crafting";
import { Effect } from "./Effect";
import { Ingredient } from "./Ingredient";
import { Meta } from "./Meta";
import { Usage } from "./Usage";


export interface Potion {
  id: string;
  name: string;
  type: string;
  rarity: string;
  effects: Effect;
  ingredients: Ingredient[];
  crafting: Crafting;
  usage: Usage;
  meta: Meta;
  image: string;
}
