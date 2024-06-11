"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        coverage: {
            // Exclude src/index.ts from coverage as it is just an exporter
            exclude: ["src/index.ts"],
        },
    },
});
