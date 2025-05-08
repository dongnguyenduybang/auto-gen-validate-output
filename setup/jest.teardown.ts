import { readFileSync, unlinkSync } from 'fs';
import { ACTION } from '../src/auto-gen/enums';
export default async function () {

  try {
    // const data = JSON.parse(readFileSync('temp.json', 'utf-8'));

    // const afterAll = {
    //   [ACTION.DELETE_MOCKED_USER]: {
    //     prefix: data.prefix,
    //   }
    // }
    console.log('Global teardown: All tests are done.');
    // unlinkSync('temp.json');
  } catch (error) {
    console.error('Error in global teardown:', error.message);
  }

}