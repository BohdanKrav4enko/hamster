import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {Ability} from "../common/types/types.ts";

export type BuyAbilityPayload = { id: number; coins: number };

export type AbilitiesState = {
    list: Ability[]
}

const initialState: AbilitiesState = {
    list: [
        {
            id: 1,
            title: "Hamster Wheel",
            price: 300,
            income: 1,
            owned: 0,
        },
        {
            id: 2,
            title: "Treadmill",
            price: 1000,
            income: 5,
            owned: 0,
        },
        {
            id: 3,
            title: "Power Engineer",
            price: 2000,
            income: 15,
            owned: 0,
        },
        {
            id: 4,
            title: "Solar Panel",
            price: 5000,
            income: 40,
            owned: 0,
        },
        {
            id: 5,
            title: "Fusion Core",
            price: 10000,
            income: 100,
            owned: 0,
        },
        {
            id: 6,
            title: "AI Manager",
            price: 20000,
            income: 250,
            owned: 0,
        },
        {
            id: 7,
            title: "Quantum Server",
            price: 60000,
            income: 700,
            owned: 0,
        },
        {
            id: 8,
            title: "Interdimensional Investor",
            price: 100000,
            income: 1500,
            owned: 0,
        },
        {
            id: 9,
            title: "Galactic Franchise",
            price: 300000,
            income: 5000,
            owned: 0,
        },
        {
            id: 10,
            title: "Time Loop Exploiter",
            price: 800000,
            income: 20000,
            owned: 0,
        }
    ]

}

const abilitiesSlice = createSlice({
    name: 'abilities',
    initialState,
    reducers: {
        buyAbility: (state, action: PayloadAction<BuyAbilityPayload>) => {
            const { id, coins } = action.payload;
            const ability = state.list.find(a => a.id === id);
            if (ability && coins >= ability.price) {
                ability.owned += 1;
                ability.price = Math.ceil(ability.price * 1.2);
            }
        }
    },
})

export const { buyAbility } = abilitiesSlice.actions
export default abilitiesSlice.reducer
