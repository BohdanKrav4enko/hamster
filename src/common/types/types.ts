export type LevelConfig = {
    level: number;
    coins: number;
    price: number;
};
export type LevelProgressBarProps = {
    selectedLevelConfigurations: LevelConfig;
};