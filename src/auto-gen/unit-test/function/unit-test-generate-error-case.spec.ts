import { combineFields, generateCombinations, generateErrorVariantsForField, getDecorators } from "../../utils/dto-helper";
import { IsDefined, IsInvalid, IsNotEmpty, IsString, MaxLength, MinLength } from "../../decorator";
describe('Unit test for function generalErrorCase()', () => {
    describe('Unit test for function generateErrorVariantsForField()', () => {
        class WorkspaceId {
            @IsDefined({ message: `Could not resolve permission type` })
            @IsInvalid({ message: `Invalid channel` })
            @IsNotEmpty({ message: `Could not resolve permission type` })
            @IsString({ message: `Could not resolve permission type` })
            workspaceId: string;
        }
        const payload = {
            workspaceId: '0'
        }
        it("should return all variants from decorators for field 'workspaceId'", () => {
            const instance = new WorkspaceId;
            const decorators = getDecorators(instance, "workspaceId");
            const fieldValue = payload.workspaceId;
            const variants = generateErrorVariantsForField(fieldValue, decorators);
            expect(variants.sort()).toEqual([123, undefined, '', 'invalid', '0'].sort());

        });
    });

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
            expect(result.sort()).toEqual(expectedCombinations.sort());
            expect(result.length).toBe(expectedCombinations.length);
        });

    });

    describe('Unit test for function combineFields()', () => {
        it('should throw error when input is not array of arrays', () => {
            expect(() => combineFields(null as any)).toThrow('Invalid input for combineFields: Expected an array of arrays');
            expect(() => combineFields([1, 2, 3] as any)).toThrow('Invalid input for combineFields: Expected an array of arrays');
            expect(() => combineFields([{ a: 1 }, [1, 2]] as any)).toThrow('Invalid input for combineFields: Expected an array of arrays');
        });
        it("should return all combineFields for 'workspaceId' and 'content' field ", () => {
            const workspaceVariants = [
                { workspaceId: 123 },
                { workspaceId: undefined },
                { workspaceId: '' },
                { workspaceId: 'invalid' },
                { workspaceId: '0' }
            ];

            const contentVariants = [
                { content: 123 },
                { content: undefined },
                { content: '' },
                { content: 'a'.repeat(2001) },
                { content: '' }
            ];
            const input = [workspaceVariants, contentVariants];
            const result = combineFields(input);
            // kiểm tra số lượng tổ hợp
            expect(result.length).toBe(workspaceVariants.length * contentVariants.length);
        })
    });

});
