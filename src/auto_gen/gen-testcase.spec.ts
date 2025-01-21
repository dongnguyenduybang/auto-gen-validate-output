import { logPropertyConstraints } from './gens/gen-property';
import * as path from 'path';
import * as fs from 'fs';

console.log(new Date())

describe('Start Gen Testcase', () => {

    const dtoFolderPath = path.join(__dirname, 'dtos');
    const outputFolderPath = path.join(__dirname, 'auto_gen_specs');

    fs.readdirSync(dtoFolderPath).forEach((file) => {
        const filePath = path.join(dtoFolderPath, file);

        if (file.endsWith('.dto.ts') || file.endsWith('.dto.js')) {
            try {
                // Import module từ file
                const dtoModule = require(filePath);

                // Duyệt qua tất cả các export trong file để tìm các class
                Object.keys(dtoModule).forEach((exportedKey) => {
                    const exportedClass = dtoModule[exportedKey];

                    // Kiểm tra nếu đối tượng export là một class (constructor)
                    if (typeof exportedClass === 'function' && /^class\s/.test(Function.prototype.toString.call(exportedClass))) {
                        console.log(`Processing class: ${exportedKey} from file: ${file}`);
                        logPropertyConstraints(exportedClass); // Gọi hàm logPropertyConstraints cho class
                    }
                });
            } catch (error) {
                console.error(`Error loading file: ${file}`, error);
            }
        }
    })

    // describe('Generated Test Files', () => {
    //     let specFiles: string[] = [];

    //     specFiles = fs.readdirSync(outputFolderPath).filter((file) => file.endsWith('.spec.ts'));

    //     specFiles.forEach((file) => {
    //         const filePath = path.join(outputFolderPath, file);

    //         describe(`Test Suite for ${file}`, () => {

    //             require(filePath);

    //         });
    //     });
    // });
});


