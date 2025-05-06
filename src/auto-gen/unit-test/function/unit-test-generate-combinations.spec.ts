import { generateCombinations } from "../../utils/dto-helper";

describe('Unit test for function generateCombinations()', () => {
    let fields, errorCasesByField;
    beforeAll(() => {
        fields = ['workspaceId', 'content'];
        errorCasesByField = {
            workspaceId: [123, undefined, '', 'invalid', '0'],
            content: [123, undefined, '', 'a'.repeat(2001), ''],
        };
    });
    it("should return all combinations for 'workspaceId' and 'content' field with error case", () => {

        const result = generateCombinations(fields, errorCasesByField);
        const expectedCombinations = [
            { workspaceId: 123, content: 123 },
            { workspaceId: 123, content: undefined },
            { workspaceId: 123, content: '' },
            { workspaceId: 123, content: 'a'.repeat(2001) },
            { workspaceId: 123, content: '' },
            { workspaceId: undefined, content: 123 },
            { workspaceId: undefined, content: undefined },
            { workspaceId: undefined, content: '' },
            { workspaceId: undefined, content: 'a'.repeat(2001) },
            { workspaceId: undefined, content: '' },
            { workspaceId: '', content: 123 },
            { workspaceId: '', content: undefined },
            { workspaceId: '', content: '' },
            { workspaceId: '', content: 'a'.repeat(2001) },
            { workspaceId: '', content: '' },
            { workspaceId: 'invalid', content: 123 },
            { workspaceId: 'invalid', content: undefined },
            { workspaceId: 'invalid', content: '' },
            { workspaceId: 'invalid', content: 'a'.repeat(2001) },
            { workspaceId: 'invalid', content: '' },
            { workspaceId: '0', content: 123 },
            { workspaceId: '0', content: undefined },
            { workspaceId: '0', content: '' },
            { workspaceId: '0', content: 'a'.repeat(2001) },
            { workspaceId: '0', content: '' },
        ];
        // kiểm tra giá trị tổ hợp
        expect(result.sort()).toEqual(expectedCombinations.sort());
        // kiểm tra số lượng tổ hợp
        expect(result.length).toBe(expectedCombinations.length);
    });

});