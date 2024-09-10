"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@vtex/api");
class VtexCommerce extends api_1.ExternalClient {
    constructor(ctx, baseRoute, options) {
        super(`http://api.vtex.com/api/${baseRoute}`, ctx, {
            ...options,
            headers: {
                VtexIdclientAutCookie: ctx.authToken,
                ...options === null || options === void 0 ? void 0 : options.headers,
            },
            params: {
                an: ctx.account,
                ...options === null || options === void 0 ? void 0 : options.params,
            },
        });
    }
}
exports.default = VtexCommerce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnRleENvbW1lcmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvY2xpZW50cy92dGV4Q29tbWVyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBc0U7QUFFdEUsTUFBcUIsWUFBYSxTQUFRLG9CQUFjO0lBQ3RELFlBQVksR0FBYyxFQUFFLFNBQWlCLEVBQUUsT0FBeUI7UUFDdEUsS0FBSyxDQUFDLDJCQUEyQixTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDakQsR0FBRyxPQUFPO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxTQUFTO2dCQUNwQyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPO2FBQ3BCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTztnQkFDZixHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNO2FBQ25CO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBZEQsK0JBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbENsaWVudCwgSW5zdGFuY2VPcHRpb25zLCBJT0NvbnRleHQgfSBmcm9tICdAdnRleC9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZ0ZXhDb21tZXJjZSBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIGJhc2VSb3V0ZTogc3RyaW5nLCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoYGh0dHA6Ly9hcGkudnRleC5jb20vYXBpLyR7YmFzZVJvdXRlfWAsIGN0eCwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgVnRleElkY2xpZW50QXV0Q29va2llOiBjdHguYXV0aFRva2VuLFxuICAgICAgICAuLi5vcHRpb25zPy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhbjogY3R4LmFjY291bnQsXG4gICAgICAgIC4uLm9wdGlvbnM/LnBhcmFtcyxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxufVxuIl19