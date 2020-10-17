export interface Item {
    id?: string;
    foto: string[];
    merek: string;
    model: string;
    harga: number;
    stok: number;

    baseClock?: number;
    boostClock?: number;
    core?: number;
    thread?: number;
    speed?: number;
    ukuran?: number;
    chipset?: string;
    prosesor?: string;
}