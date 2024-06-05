import { Scene } from "../models/scene";

export const Scenes: Scene[] = [
    {
        id: 1,
        backgroundUrl: '1.jpg',
        hitzones: [
            {
                x: 30,
                y: 100,
                goto: 2
            }
        ]
    },
    {
        id: 2,
        backgroundUrl: '2.jpg',
        hitzones: [
            {
                x: 30,
                y: 100,
                goto: 3
            },
            {
                x: 100,
                y: 100,
                goto: 1
            }
        ]
    },
    {
        id: 3,
        backgroundUrl: '3.jpg',
        hitzones: [
            {
                x: 50,
                y: 100,
                goto: 4
            },
            {
                x: 100,
                y: 100,
                goto: 2
            }
        ]
    },
    {
        id: 4,
        backgroundUrl: '4.jpg',
        hitzones: [
            {
                x: 50,
                y: 100,
                goto: 5
            },
            {
                x: 100,
                y: 100,
                goto: 3
            }
        ]
    },
    {
        id: 5,
        backgroundUrl: '5.jpg',
        hitzones: [
            {
                x: 50,
                y: 100,
                goto: 6
            },
            {
                x: 100,
                y: 100,
                goto: 4
            }
        ]
    },
    {
        id: 6,
        backgroundUrl: '6.jpg',
        hitzones: [
            {
                x: 33,
                y: 100,
                goto: 5
            },
            {
                x: 66,
                y: 100,
                goto: 7
            },
            {
                x: 100,
                y: 100,
                goto: 8
            }
        ]
    },
    {
        id: 7,
        backgroundUrl: '7-house.jpg',
        hitzones: [
            {
                x: 40,
                y: 100,
                goto: 6
            }
        ]
    },
    {
        id: 8,
        backgroundUrl: '8-C.jpg',
        hitzones: [
            {
                x: 33,
                y: 100,
                goto: 6
            },
            {
                x: 66,
                y: 100,
                goto: 9
            },
            {
                x: 100,
                y: 100,
                goto: 10
            }
        ]
    },
    {
        id: 9,
        backgroundUrl: '9-B.jpg',
        hitzones: [
            {
                x: 33,
                y: 100,
                goto: 10
            },
            {
                x: 66,
                y: 100,
                goto: 8
            }
        ]
    },
    {
        id: 10,
        backgroundUrl: '10-top.jpg',
        hitzones: [
            {
                x: 33,
                y: 100,
                goto: 8
            },
            {
                x: 50,
                y: 100,
                goto: 9
            }
        ]
    }
]