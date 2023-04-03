export const build = (name: string) => ({
  "executor": "@nrwl/vite:build",
  "outputs": ["{options.outputPath}"],
  "defaultConfiguration": "production",
  "options": {
    "outputPath": `dist/apps/${name}`
  },
  "configurations": {
    "development": {
      "mode": "development"
    },
    "production": {
      "mode": "production"
    }
  }
});
