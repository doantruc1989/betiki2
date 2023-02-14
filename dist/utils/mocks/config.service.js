"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockedConfigService = {
    get(key) {
        switch (key) {
            case 'JWT_ACCESS_TOKEN_EXPIRATION_TIME':
                return '3600';
        }
    }
};
exports.default = mockedConfigService;
//# sourceMappingURL=config.service.js.map