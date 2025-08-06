import styled from "styled-components";

export const ShopContainer = styled.div`
  padding: 20px;
  color: white;
  max-width: 800px;
  margin: 0 auto;
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(0, 0, 50, 0.5);
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
`
export const AbilitiesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
`

export const CoinText = styled.p`
  font-size: 30px;
  font-weight: bold;
`

export const PassiveText = styled.p`
  font-size: 20px;
  opacity: 0.8;
`

export const AbilityCard = styled.div`
    max-width: 360px;
    width: 100%;
    background: rgba(0, 0, 50, 0.3);
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    margin-bottom: 15px;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.02);
    }
`

export const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`

export const Detail = styled.p`
  margin: 4px 0;
`

export const BuyButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #0ff;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #00e6e6;
  }
`