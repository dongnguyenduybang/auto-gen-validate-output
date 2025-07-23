export type HeaderOptions = {
  token?: string;
  userId?: string;
  deviceId?: string;
  role?: string;
  [key: string]: string | undefined;
};

export interface PayloadGen {
  body: Record<string, any>;
  expects: string[];
}

export type FieldValueObject = Record<string, any>;

export type ExtractConfig = {
  [key: string]: {
    path: string[];
    fields: string[];
  };
};

export interface Entry {
  path?: string;
  [key: string]: any;
}
