import { Client } from "../client/client";

export interface Purchase {
    id: number;
    client: Client;
    date: Date;
}