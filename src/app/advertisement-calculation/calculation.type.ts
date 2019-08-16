interface Product {
    title: string;
    category: string;
    total_amount: number;
    invest_amount: number;
    interest_rate: number;
    month: number;
    commission: number;
    description: string;
    url: string;
    percentage?: number;
    expectedProfit?: number;
    fee?: number;
    tax?: number;
}
interface ProductList {
    list: Product[];
}
