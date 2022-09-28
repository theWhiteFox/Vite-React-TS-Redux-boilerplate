import { FC } from "react";

export interface ITask {
    taskName: string
}

export interface IRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}
