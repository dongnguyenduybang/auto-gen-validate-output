/* eslint-disable prettier/prettier */
import 'reflect-metadata';

export type StepConfig = {
  action: string;
  body?: any;
  header?: any;
  expect?: any;
};

export function Step(config: StepConfig) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata(`step_${propertyKey}`, config, target.constructor);
  };
}
