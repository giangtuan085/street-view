import { Scene } from "../models/scene";

export const Scenes: Scene[] = [
    {
        id: 1,
        backgroundUrl: 'assets/1.jpg',
        hitzones: [
            {
                goto: 2,
                x: 400,
                y: 110
            }
        ]
    },
    {
        id: 2,
        backgroundUrl: 'assets/2.jpg',
        hitzones: [
            {
                goto: 3,
                x: 450,
                y: 110
            },
            {
                goto: 1,
                x: 1150,
                y: 210
            }
        ]
    },
    {
        id: 3,
        backgroundUrl: 'assets/3.jpg',
        hitzones: [
            {
                goto: 4,
                x: 250,
                y: 110
            },
            {
                goto: 2,
                x: 1400,
                y: 200
            }
        ]
    },
    {
        id: 4,
        backgroundUrl: 'assets/4.jpg',
        hitzones: [
            {
                goto: 5,
                x: 450,
                y: 110
            },
            {
                goto: 3,
                x: 1350,
                y: 180
            }
        ]
    },
    {
        id: 5,
        backgroundUrl: 'assets/5.jpg',
        hitzones: [
            {
                goto: 6,
                x: 290,
                y: 110
            },
            {
                goto: 4,
                x: 1300,
                y: 170
            }
        ]
    },
    {
        id: 6,
        backgroundUrl: 'assets/6.jpg',
        hitzones: [
            {
                goto: 5,
                x: 230,
                y: 110
            },
            {
                goto: 7,
                x: 860,
                y: 210
            },
            {
                goto: 8,
                x: 1510,
                y: 110
            }
        ]
    },
    {
        id: 7,
        backgroundUrl: 'assets/7-house.jpg',
        hitzones: [
            {
                goto: 6,
                x: 340,
                y: 110
            }
        ]
    },
    {
        id: 8,
        backgroundUrl: 'assets/8-C.jpg',
        hitzones: [
            {
                goto: 6,
                x: 490,
                y: 175
            },
            {
                goto: 9,
                x: 1200,
                y: 110
            },
            {
                goto: 10,
                x: 1530,
                y: 110
            }
        ]
    },
    {
        id: 9,
        backgroundUrl: 'assets/9-B.jpg',
        hitzones: [
            {
                goto: 10,
                x: 130,
                y: 170
            },
            {
                goto: 8,
                x: 800,
                y: 170
            }
        ]
    },
    {
        id: 10,
        backgroundUrl: 'assets/10-top.jpg',
        hitzones: [
            {
                goto: 8,
                x: 565,
                y: 110
            },
            {
                goto: 9,
                x: 910,
                y: 110
            }
        ]
    }
]