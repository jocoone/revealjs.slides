export const lint = {
  "executor": "@nrwl/linter:eslint",
  "outputs": ["{options.outputFile}"],
  "options": {
    "lintFilePatterns": ["apps/demo/**/*.{ts,tsx,js,jsx}"]
  }
};
