import {buyAbility} from "../../../store/abilitiesSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks.ts";
import type {Ability} from "../../../common/types/types.ts";
import {decreaseCoins, setError} from "../../../store/hamsterSlice.ts";
import {
    AbilitiesWrapper,
    AbilityCard, BuyButton,
    CoinText,
    Detail,
    PassiveText,
    ShopContainer, Title,
    TopBar
} from "./ShopPageStyled.tsx";


export const ShopPage = () => {

    const coins = useAppSelector(state => state.hamster.count);
    const abilities = useAppSelector(state => state.abilities.list);
    const perSecondIncome = useAppSelector(state => state.hamster.passiveIncome)
    const dispatch = useAppDispatch();

    const buyAbilityHandler = (a: Ability) => {
        if (coins >= a.price) {
            dispatch(buyAbility({id:a.id, coins}));
            dispatch(decreaseCoins(a.price));
        } else {
            dispatch(setError('Not enough funds'))
        }
    }

    return (
        <ShopContainer>
            <TopBar>
                <CoinText>$ {coins}</CoinText>
                <CoinText>Shop</CoinText>
                <PassiveText>Passive: {perSecondIncome} / s</PassiveText>
            </TopBar>
            <AbilitiesWrapper>
                {abilities.map((a) => (
                    <AbilityCard key={a.id}>
                        <Title>{a.title}</Title>
                        <Detail>Price: {a.price}</Detail>
                        <Detail>Income per sec: {a.income}</Detail>
                        <Detail>Purchased: {a.owned}</Detail>
                        <BuyButton onClick={() => buyAbilityHandler(a)}>Buy</BuyButton>
                    </AbilityCard>
                ))}
            </AbilitiesWrapper>
        </ShopContainer>
    );
};
