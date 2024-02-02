export declare type DirectionType = {
    x: string | null;
    y: string | null;
};
export declare type XYType = {
    x: number;
    y: number;
};
export declare type ScrollDataType = {
    scrolling: boolean;
    time: number;
    direction: DirectionType;
    speed: XYType;
    totalDistance: XYType;
    relativeDistance: XYType;
    position: XYType;
};
export declare type OptionsType = {
    onScrollStart?: Function;
    onScrollEnd?: Function;
};
