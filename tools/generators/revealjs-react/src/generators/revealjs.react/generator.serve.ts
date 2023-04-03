export const serve = {
  "executor": "@nrwl/vite:dev-server",
  "defaultConfiguration": "development",
  "options": {
    "buildTarget": "demo:build"
  },
  "configurations": {
    "development": {
      "buildTarget": "demo:build:development",
      "hmr": true
    },
    "production": {
      "buildTarget": "demo:build:production",
      "hmr": false
    }
  }
};
