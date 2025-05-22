import {
  IsDefined,
  IsInvalid,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator';
import { softErrorFromMap } from '../../utils/dto-helper';

describe('Unit test for function softErrorFromMap()', () => {
  class TestDto {
    @IsString({ message: `Could not resolve permission type` })
    @IsDefined({ message: 'Could not resolve permission type' })
    @IsInvalid({ message: 'Invalid channel' })
    @IsNotEmpty({ message: 'Could not resolve permission type' })
    workspaceId: string = '';

    @IsString({ message: `Could not resolve permission type` })
    @IsDefined({ message: 'Could not resolve permission type' })
    @IsInvalid({ message: 'Invalid channel' })
    @IsNotEmpty({ message: 'Could not resolve permission type' })
    channelId: string = '';

    @IsString({ message: `Could not resolve permission type` })
    @IsDefined({ message: `Could not resolve permission type` })
    @IsNotEmpty({ message: `Could not resolve permission type` })
    @IsInvalid({ message: `Unauthorized request` })
    userId: string = '';

    @IsString()
    @IsDefined()
    @MinLength(1)
    @MaxLength(2000)
    content: string = '';

    @IsString()
    @IsDefined()
    @MinLength(1)
    ref: string = '';
  }
  describe('Priority error case', () => {
    it("should return 'Could not resolve permission type' for empty 'workspaceId'", () => {
      const payload = { workspaceId: '', channelId: '{{channelId}}' };

      const result = softErrorFromMap(payload, TestDto);

      expect(result).toEqual(['Could not resolve permission type']);
    });
    it("should return 'Invalid channel' for invalid value 'workspaceId'", () => {
      const payload = { workspaceId: 'aaaa', channelId: '{{channelId}}' };

      const result = softErrorFromMap(payload, TestDto);
      expect(result).toEqual(['Invalid channel']);
    });
    it("should return 'Unsupported permission type' for undefined value 'channelId'", () => {
      const payload = { workspaceId: '0' };

      const result = softErrorFromMap(payload, TestDto);
      expect(result).toEqual(['Unsupported permission type']);
    });
    it("should return 'Unauthorized request' for invalid value 'userId'", () => {
      const payload = {
        workspaceId: '0',
        channelId: '{{channelId}}',
        userId: 'invalid',
      };

      const result = softErrorFromMap(payload, TestDto);
      console.log(result)
      expect(result).toEqual(['Unauthorized request']);
    });
  });
  describe('No priority error case', () => {
    it("should return 'must have required property ref' for undefined 'ref'", () => {
      const payload = {
        workspaceId: '0',
        channelId: '{{channelId}}',
        content: 'content',
        ref: undefined,
      };
      const result = softErrorFromMap(payload, TestDto);
      expect(result).toEqual(["must have required property 'ref'"]);
    });
    it("should return 'ref must have more than 1 length' for empty 'ref'", () => {
      const payload = {
        workspaceId: '0',
        channelId: '{{channelId}}',
        content: 'content',
        ref: '',
      };
      const result = softErrorFromMap(payload, TestDto);
      expect(result).toEqual(['ref must have more than 1 length']);
    });
    it("should return 'ref must have more than 1 length, content must to range from 1 to 2000 length' for empty 'ref' and 'content'", () => {
      const payload = {
        workspaceId: '0',
        channelId: '{{channelId}}',
        content: '',
        ref: '',
      };
      const result = softErrorFromMap(payload, TestDto);
      expect(result.sort()).toEqual(
        [
          'ref must have more than 1 length',
          'content must to range from 1 to 2000 length',
        ].sort(),
      );
    });
  });
});
