// store/types.ts
export interface IRootState {
    version: string;
}

export interface IStock {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface ICounterState {
    count: number;
}

export interface IStockState {
    stocks: IStock[];
}

export interface IPortfolioState {
    funds: number;
    stocks: IStock[];
}
