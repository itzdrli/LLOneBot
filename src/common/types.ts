export interface Config {
    port: number
    wsPort: number
    hosts: string[]
    token?: string
    enableBase64?: boolean
    debug?: boolean
    reportSelfMessage?: boolean
    log?: boolean
}

