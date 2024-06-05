export type FileName = `${string}.jpg` | `${string}.png`

export interface Scene {
    id: number;
    backgroundUrl: FileName;
    hitzones: Hitzone[]
}

export interface Hitzone {
    x: number; // x-axis percentage
    y: number; // y-axis percentage
    goto: number; // id of the destined scene
}