import { demoUsage, EnhancedAIResolver, testAIWithRealSchemas } from "./utils/swagger-ai.2";

async function main() {
  console.log("=== Bắt đầu chạy thử AI Resolver ===");

  // Cách 1: Chạy test có sẵn
  console.log("\n[1] Chạy test có sẵn");
  await testAIWithRealSchemas();

  // Cách 2: Demo tạo body
  console.log("\n[2] Demo tạo body");
  await demoUsage();

  // Cách 3: Tự tạo test case
  console.log("\n[3] Tự tạo test case");
  const customTest = async () => {
    const aiResolver = new EnhancedAIResolver();
    await aiResolver.initializeAI();

    // Test với schema mới
    const result = await aiResolver.analyzeSchema("V3AcceptMessageRequestRequest");
    console.log("Kết quả phân tích:", result);

    // Test resolve context
    const contextResult = await aiResolver.resolveUserIdContext(
      "AcceptFriendRequest",
      {
        description: "Test user identification",
        properties: { userId: { type: "string" } }
      },
      "/Friend/AcceptFriendRequest",
      "POST"
    );
    console.log("Kết quả phân tích context:", contextResult);
  };

  await customTest();
}

main().catch(console.error);