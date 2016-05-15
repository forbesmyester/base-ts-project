/// <reference path="../typings/main.d.ts" />

import * as T from "./types";

export function m(a: number, b: number): T.BasicMath {
    return {
        a: a,
        b: b,
        equals: a + b
    };
}
