// #!/usr/bin/env node
// import { program } from 'commander';
// import { genBodyRequest } from './utils/swagger-help';


// // Định nghĩa lệnh CLI
// program
//   .command('gen-request')
//   .description('Generate request test cases from DTO and options')
//   .argument('<dtoName>', 'DTO name (e.g., create-channel)')
//   .option('-o, --options <options>', 'Test options as JSON string', '{}')
//   .action(async (dtoName: string, { options }: { options: string }) => {
//     try {
//       const parsedOptions = JSON.parse(options);
//       console.log(`Generating test cases for DTO: ${dtoName} with options:`, parsedOptions);
//       await genBodyRequest(dtoName, parsedOptions);
//       console.log('✅ Test case generation completed.');
//     } catch (error) {
//       console.error('❌ Error generating test cases:', error.message);
//       process.exit(1);
//     }
//   });

// // Parse arguments và chạy CLI
// program.parse(process.argv);