export type Mode = 'production' | 'development';

export interface EnvironmentVariables {
    mode?: Mode;
    port?: number;
}

export interface BuildPath {
    entry: string;
    output: string;
}

export interface BuildOptions {
    port: number;
    mode: Mode;
    paths: BuildPath;
}
