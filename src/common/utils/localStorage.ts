export const saveState = (key: string, state: unknown): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.error("Error saving to LocalStorage:", e);
    }
};

export const loadState = (key: string): unknown | undefined => {
    try {
        const serializedState = localStorage.getItem(key);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Error loading from LocalStorage:", e);
        return undefined;
    }
};
