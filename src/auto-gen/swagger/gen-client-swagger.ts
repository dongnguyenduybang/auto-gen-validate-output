import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
// Path file JSON Swagger

import { getFilesSwagger } from '../utils/helper';

export function genClientSwagger() {
    const outputDir = path.join(__dirname, '../swagger-hono');
    const allSchemas: Record<string, any> = {};
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const swaggerDir = path.join(__dirname, 'swagger-json/hono')
    const swaggerFiles = getFilesSwagger(swaggerDir);

    if (swaggerFiles.length === 0) {
        console.error('❌ No Swagger JSON files found!');
        process.exit(1);
    }

    swaggerFiles.forEach((file) => {
        const serviceName = path.basename(file, '.swagger.json');
        const className = serviceName.replace(/-([a-z])/g, (match, group1) =>
            group1.toUpperCase(),
        );

        execSync(
            `npx swagger-typescript-api generate --extract-request-params -p ${file} -o ${outputDir} --single-http-client --templates swagger/templates/custom --name "${serviceName}-client.ts" --api-class-name ${className}HttpClient --generate-aliases --route-types`,
            { stdio: 'inherit' },
        );

        const swaggerData = JSON.parse(fs.readFileSync(file, 'utf-8'));
        const schemas = swaggerData.components?.schemas || {};
        Object.assign(allSchemas, schemas);
        console.log(`✅ Generated API types: ${serviceName}`);
    });

    fs.writeFileSync(
        path.join(outputDir, 'schemas.json'),
        JSON.stringify(allSchemas, null, 2),
    );
    console.log('🎉 All API types generated successfully!');



} 
