export type FileName = `${string}.jpg` | `${string}.png`

export interface Scene {
    id: number;
    backgroundUrl: FileName;
    hitzones: Hitzone[]
}

export interface Hitzone {
    goto: number; // id of the destined scene
    y: number; // y position for navigation button
    x: number; // x position for navigation button
}