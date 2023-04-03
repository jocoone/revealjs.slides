export const preview = {
  "executor": "@nrwl/vite:preview-server",
  "defaultConfiguration": "development",
  "options": {
    "buildTarget": "demo:build"
  },
  "configurations": {
    "development": {
      "buildTarget": "demo:build:development"
    },
    "production": {
      "buildTarget": "demo:build:production"
    }
  }
};
