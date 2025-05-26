import { faker } from '@faker-js/faker';
import { ACTION, HEADER_LIST, VAR } from '../enums';
import { Step } from '../utils/declarations';

export function genUpdateUserStatusTestCases(): Step[] {
  const MAX_LENGTH_CONTENT_STATUS = 50;

  const contentValues = [
    { title: 'text', value: 'sampleText' },
    {
      title: `${MAX_LENGTH_CONTENT_STATUS - 1} characters`,
      value: faker.string.alpha(MAX_LENGTH_CONTENT_STATUS - 1),
    },
    {
      title: `${MAX_LENGTH_CONTENT_STATUS} characters`,
      value: faker.string.alpha(MAX_LENGTH_CONTENT_STATUS),
    },
    { title: 'number', value: faker.number.int().toString() },
    { title: 'special character', value: faker.string.symbol(10) },
    { title: 'contain spacing', value: '   ✨ abc ✨   ' },
    { title: 'empty string', value: '' },
    { title: 'only space', value: '     ' },
  ];

  return contentValues.map((value) => ({
    action: ACTION.UPDATE_USER_STATUS,
    body: {
      content: value.value,
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    expect: { ok: true },
  }));
}
