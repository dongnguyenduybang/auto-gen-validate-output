import { combineFields } from '../../utils/dto-helper';
describe('Unit test for function combineFields()', () => {
  it('should throw error when input is not array', () => {
    expect(() => combineFields(null as any)).toThrow(
      'Invalid input for combineFields: Expected an array of arrays',
    );
    expect(() => combineFields([1, 2, 3] as any)).toThrow(
      'Invalid input for combineFields: Expected an array of arrays',
    );
    expect(() => combineFields([{ a: 1 }, [1, 2]] as any)).toThrow(
      'Invalid input for combineFields: Expected an array of arrays',
    );
  });
  it("should return all combineFields for 'workspaceId' and 'content' field ", () => {
    const workspaceVariants = [
      { workspaceId: 123 },
      { workspaceId: undefined },
      { workspaceId: '' },
      { workspaceId: 'invalid' },
      { workspaceId: '0' },
    ];

    const contentVariants = [
      { content: 123 },
      { content: undefined },
      { content: '' },
      { content: 'a'.repeat(2001) },
      { content: '' },
    ];
    const input = [workspaceVariants, contentVariants];
    const result = combineFields(input);
    // kiểm tra số lượng tổ hợp
    expect(result.length).toBe(
      workspaceVariants.length * contentVariants.length,
    );
    // kiểm tra giá trị tổ hợp ngẫu nhiên
    expect(result).toContainEqual([{ workspaceId: 123 }, { content: 123 }]);
    expect(result).toContainEqual([
      { workspaceId: undefined },
      { content: undefined },
    ]);
    expect(result).toContainEqual([
      { workspaceId: '' },
      { content: 'a'.repeat(2001) },
    ]);
    expect(result).toContainEqual([
      { workspaceId: 'invalid' },
      { content: '' },
    ]);
    expect(result).toContainEqual([
      { workspaceId: '0' },
      { content: undefined },
    ]);
  });
});
