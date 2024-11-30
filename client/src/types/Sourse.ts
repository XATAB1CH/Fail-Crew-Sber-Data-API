enum SourceType {
    API = "API",
    DB = "DB",
};

interface SourceParams {
    ResponceTimeout: string; // исправить надо на number мб
    CountAttemps: number | 1;
};

export interface Source {
    SourceType: SourceType | SourceType.API;
    URL: string;
    SourceParams: SourceParams;
};