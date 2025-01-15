import { Duration } from "./Duration";

export interface Effect {
  primary: PrimaryEffect;
  secondary: SecondaryEffect[];
}

interface SecondaryEffect {
  attribute: string;
  value: number;
  duration: Duration;
}

interface PrimaryEffect {
  attribute: string;
  value: number;
  duration: Duration;
}

