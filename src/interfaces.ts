import { FC } from "react";

export interface IRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}
