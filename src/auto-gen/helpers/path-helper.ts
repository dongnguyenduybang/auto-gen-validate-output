import path from 'path';
import { getConfig } from '../utils/get-config';

/**
 * Helper class để quản lý đường dẫn của repo cá nhân
 */
export class PathHelper {
  private static workingDir = process.cwd();

  /**
   * Lấy thư mục làm việc (repo cá nhân)
   */
  static getWorkingDir(): string {
    return this.workingDir;
  }

  /**
   * Lấy đường dẫn test-requests
   */
  static getTestRequestsPath(): string {
    const testRequestsDir = getConfig<string>(
      'testRequestsDir',
      './test-requests',
    );
    return path.resolve(this.workingDir, testRequestsDir);
  }

  /**
   * Lấy đường dẫn reports
   */
  static getReportsPath(): string {
    const reportDir = getConfig<string>(
      'reportDir',
      './src/auto-gen/tmp-reports',
    );
    return path.resolve(this.workingDir, reportDir);
  }

  /**
   * Lấy đường dẫn reports với subfolder .reports
   */
  static getReportsSubPath(): string {
    return path.join(this.getReportsPath(), '.reports');
  }

  /**
   * Resolve đường dẫn tương đối với working directory
   */
  static resolve(relativePath: string): string {
    return path.resolve(this.workingDir, relativePath);
  }

  /**
   * Tính đường dẫn relative từ test-requests directory
   */
  static getRelativeFromTestRequests(fullPath: string): string {
    const testRequestsPath = this.getTestRequestsPath();
    return path.relative(testRequestsPath, fullPath).replace(/\\/g, '/');
  }

  /**
   * Kiểm tra và tạo directory nếu chưa tồn tại
   */
  static ensureDir(dirPath: string): void {
    const fs = require('fs');
    if (!fs.existsSync(dirPath)) {
      console.log(`📁 Creating directory: ${dirPath}`);
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  /**
   * Log thông tin đường dẫn để debug
   */
  static debugPaths(): void {
    console.log('🔍 Path Debug Info:');
    console.log(`  Working Dir: ${this.getWorkingDir()}`);
    console.log(`  Test Requests: ${this.getTestRequestsPath()}`);
    console.log(`  Reports: ${this.getReportsPath()}`);
    console.log(`  Reports Sub: ${this.getReportsSubPath()}`);
  }
}
