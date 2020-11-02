

export type RandomNumberOptions = Range<18, 30>
export type RadixOptions = Range<18, 30>
export type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;
export type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];
export type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
export type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

export const getItemKey = (randomNumber?: RandomNumberOptions, randomRadix?: RadixOptions) => {
    const number = randomNumber ? randomNumber : randomInt(19, 27)
    const radix = randomRadix ? randomRadix : randomInt(20, 28)
    return Math.random().toString(radix).substring(number);
} 


function randomInt(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}