"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardHub = void 0;
const tracing_1 = require("../utils/tracing");
const vtexCommerce_1 = __importDefault(require("./vtexCommerce"));
class GiftCardHub extends vtexCommerce_1.default {
    constructor(ctx, options) {
        super(ctx, 'giftcardproviders', {
            ...options,
            headers: {
                ...(ctx.adminUserAuthToken
                    ? {
                        VtexIdclientAutCookie: ctx.adminUserAuthToken,
                    }
                    : {}),
            },
        });
    }
    getProviders(userToken, tracingConfig) {
        const metric = 'giftcardprovider-getProviders';
        return this.http.get('', {
            headers: {
                VtexIdclientAutCookie: userToken,
            },
            metric,
            tracing: tracing_1.createTracing(metric, tracingConfig),
        });
    }
    // eslint-disable-next-line max-params
    createOrUpdateGiftCardProvider(id, body, userToken, tracingConfig) {
        const metric = 'giftcardprovider-createOrUpdate';
        return this.http.put(id, body, {
            headers: {
                VtexIdclientAutCookie: userToken,
            },
            metric,
            tracing: tracing_1.createTracing(metric, tracingConfig),
        });
    }
    deleteGiftCardById(id, userToken, tracingConfig) {
        const metric = 'giftcardprovider-Delete';
        return this.http.delete(id, {
            headers: {
                VtexIdclientAutCookie: userToken,
            },
            metric,
            tracing: tracing_1.createTracing(metric, tracingConfig),
        });
    }
}
exports.GiftCardHub = GiftCardHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lmdENhcmRIdWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL2dpZnRDYXJkSHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDhDQUFnRDtBQUNoRCxrRUFBeUM7QUFFekMsTUFBYSxXQUFZLFNBQVEsc0JBQVk7SUFDM0MsWUFBWSxHQUFjLEVBQUUsT0FBeUI7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRTtZQUM5QixHQUFHLE9BQU87WUFDVixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7b0JBQ3hCLENBQUMsQ0FBQzt3QkFDRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsa0JBQWtCO3FCQUM5QztvQkFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ1I7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sWUFBWSxDQUFDLFNBQWlCLEVBQUUsYUFBb0M7UUFDekUsTUFBTSxNQUFNLEdBQUcsK0JBQStCLENBQUE7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBcUIsRUFBRSxFQUFFO1lBQzNDLE9BQU8sRUFBRTtnQkFDUCxxQkFBcUIsRUFBRSxTQUFTO2FBQ2pDO1lBQ0QsTUFBTTtZQUNOLE9BQU8sRUFBRSx1QkFBYSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7U0FDOUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNDQUFzQztJQUMvQiw4QkFBOEIsQ0FDbkMsRUFBVSxFQUNWLElBQXNCLEVBQ3RCLFNBQWlCLEVBQ2pCLGFBQW9DO1FBRXBDLE1BQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFBO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTJCLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDdkQsT0FBTyxFQUFFO2dCQUNQLHFCQUFxQixFQUFFLFNBQVM7YUFDakM7WUFDRCxNQUFNO1lBQ04sT0FBTyxFQUFFLHVCQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQztTQUM5QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sa0JBQWtCLENBQ3ZCLEVBQVUsRUFDVixTQUFpQixFQUNqQixhQUFvQztRQUVwQyxNQUFNLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEVBQUUsRUFBRTtZQUMvQixPQUFPLEVBQUU7Z0JBQ1AscUJBQXFCLEVBQUUsU0FBUzthQUNqQztZQUNELE1BQU07WUFDTixPQUFPLEVBQUUsdUJBQWEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDO1NBQzlDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQXpERCxrQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnN0YW5jZU9wdGlvbnMsIElPQ29udGV4dCwgUmVxdWVzdFRyYWNpbmdDb25maWcgfSBmcm9tICdAdnRleC9hcGknXG5cbmltcG9ydCB7IGNyZWF0ZVRyYWNpbmcgfSBmcm9tICcuLi91dGlscy90cmFjaW5nJ1xuaW1wb3J0IFZ0ZXhDb21tZXJjZSBmcm9tICcuL3Z0ZXhDb21tZXJjZSdcblxuZXhwb3J0IGNsYXNzIEdpZnRDYXJkSHViIGV4dGVuZHMgVnRleENvbW1lcmNlIHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIG9wdGlvbnM/OiBJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICBzdXBlcihjdHgsICdnaWZ0Y2FyZHByb3ZpZGVycycsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLihjdHguYWRtaW5Vc2VyQXV0aFRva2VuXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIFZ0ZXhJZGNsaWVudEF1dENvb2tpZTogY3R4LmFkbWluVXNlckF1dGhUb2tlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm92aWRlcnModXNlclRva2VuOiBzdHJpbmcsIHRyYWNpbmdDb25maWc/OiBSZXF1ZXN0VHJhY2luZ0NvbmZpZykge1xuICAgIGNvbnN0IG1ldHJpYyA9ICdnaWZ0Y2FyZHByb3ZpZGVyLWdldFByb3ZpZGVycydcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEdpZnRDYXJkUHJvdmlkZXJbXT4oJycsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgVnRleElkY2xpZW50QXV0Q29va2llOiB1c2VyVG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0cmljLFxuICAgICAgdHJhY2luZzogY3JlYXRlVHJhY2luZyhtZXRyaWMsIHRyYWNpbmdDb25maWcpLFxuICAgIH0pXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICBwdWJsaWMgY3JlYXRlT3JVcGRhdGVHaWZ0Q2FyZFByb3ZpZGVyKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgYm9keTogR2lmdENhcmRQcm92aWRlcixcbiAgICB1c2VyVG9rZW46IHN0cmluZyxcbiAgICB0cmFjaW5nQ29uZmlnPzogUmVxdWVzdFRyYWNpbmdDb25maWdcbiAgKSB7XG4gICAgY29uc3QgbWV0cmljID0gJ2dpZnRjYXJkcHJvdmlkZXItY3JlYXRlT3JVcGRhdGUnXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8R2lmdENhcmRQcm92aWRlclJlc3BvbnNlPihpZCwgYm9keSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBWdGV4SWRjbGllbnRBdXRDb29raWU6IHVzZXJUb2tlbixcbiAgICAgIH0sXG4gICAgICBtZXRyaWMsXG4gICAgICB0cmFjaW5nOiBjcmVhdGVUcmFjaW5nKG1ldHJpYywgdHJhY2luZ0NvbmZpZyksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVHaWZ0Q2FyZEJ5SWQoXG4gICAgaWQ6IHN0cmluZyxcbiAgICB1c2VyVG9rZW46IHN0cmluZyxcbiAgICB0cmFjaW5nQ29uZmlnPzogUmVxdWVzdFRyYWNpbmdDb25maWdcbiAgKSB7XG4gICAgY29uc3QgbWV0cmljID0gJ2dpZnRjYXJkcHJvdmlkZXItRGVsZXRlJ1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oaWQsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgVnRleElkY2xpZW50QXV0Q29va2llOiB1c2VyVG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0cmljLFxuICAgICAgdHJhY2luZzogY3JlYXRlVHJhY2luZyhtZXRyaWMsIHRyYWNpbmdDb25maWcpLFxuICAgIH0pXG4gIH1cbn1cblxuaW50ZXJmYWNlIEdpZnRDYXJkUHJvdmlkZXIge1xuICBzZXJ2aWNlVXJsOiBzdHJpbmdcbiAgb2F1dGhQcm92aWRlcjogc3RyaW5nXG4gIHByZUF1dGhFbmFibGVkOiBib29sZWFuXG4gIGNhbmNlbEVuYWJsZWQ6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEdpZnRDYXJkUHJvdmlkZXJSZXNwb25zZSBleHRlbmRzIEdpZnRDYXJkUHJvdmlkZXIge1xuICBpZDogc3RyaW5nXG4gIGNhcHRpb246IHN0cmluZ1xuICBfc2VsZjoge1xuICAgIGhyZWY6IHN0cmluZ1xuICB9XG59XG4iXX0=