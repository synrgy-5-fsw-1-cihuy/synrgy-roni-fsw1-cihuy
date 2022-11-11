import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  displayName: "Integration Tests",
  testMatch: ["<rootDir>/__tests__/**/*.test.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
    "^@configs/(.*)": "<rootDir>/src/configs/$1",
    "^@constants/(.*)": "<rootDir>/src/constants/$1",
    "^@controllers/(.*)": "<rootDir>/src/controllers/$1",
    "^@middlewares/(.*)": "<rootDir>/src/middlewares/$1",
    "^@models/(.*)": "<rootDir>/src/models/$1",
    "^@routes/(.*)": "<rootDir>/src/routes/$1",
    "^@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};

export default jestConfig;
