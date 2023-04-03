export const test = {
  "executor": "@nrwl/vite:test",
  "outputs": ["coverage/apps/demo"],
  "options": {
    "passWithNoTests": true,
    "reportsDirectory": "../../coverage/apps/demo"
  }
};
