export const build = {
  "executor": "@nrwl/vite:build",
  "outputs": ["{options.outputPath}"],
  "defaultConfiguration": "production",
  "options": {
    "outputPath": "dist/apps/demo"
  },
  "configurations": {
    "development": {
      "mode": "development"
    },
    "production": {
      "mode": "production"
    }
  }
};
