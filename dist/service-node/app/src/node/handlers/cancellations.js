"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCancellation = exports.listAllCancellations = void 0;
const co_body_1 = require("co-body");
async function listAllCancellations(ctx) {
    const { clients: { giftCardProvider }, vtex: { route: { params: { giftCardId, id }, }, }, } = ctx;
    ctx.status = 200;
    ctx.body = giftCardProvider.listAllCancellations(id, giftCardId);
}
exports.listAllCancellations = listAllCancellations;
async function createCancellation(ctx) {
    const body = await co_body_1.json(ctx.req);
    const { clients: { giftCardProvider }, vtex: { route: { params: { giftCardId, id }, }, }, } = ctx;
    ctx.status = 200;
    ctx.body = giftCardProvider.createCancellation(id, giftCardId, body);
}
exports.createCancellation = createCancellation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsbGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2hhbmRsZXJzL2NhbmNlbGxhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQThCO0FBRXZCLEtBQUssVUFBVSxvQkFBb0IsQ0FBQyxHQUFZO0lBQ3JELE1BQU0sRUFDSixPQUFPLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUM3QixJQUFJLEVBQUUsRUFDSixLQUFLLEVBQUUsRUFDTCxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQzNCLEdBQ0YsR0FDRixHQUFHLEdBQUcsQ0FBQTtJQUVQLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQ2hCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsb0JBQW9CLENBQzlDLEVBQVksRUFDWixVQUFvQixDQUNyQixDQUFBO0FBQ0gsQ0FBQztBQWZELG9EQWVDO0FBRU0sS0FBSyxVQUFVLGtCQUFrQixDQUFDLEdBQVk7SUFDbkQsTUFBTSxJQUFJLEdBQTJCLE1BQU0sY0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUV4RCxNQUFNLEVBQ0osT0FBTyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFDN0IsSUFBSSxFQUFFLEVBQ0osS0FBSyxFQUFFLEVBQ0wsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxHQUMzQixHQUNGLEdBQ0YsR0FBRyxHQUFHLENBQUE7SUFFUCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUNoQixHQUFHLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUM1QyxFQUFZLEVBQ1osVUFBb0IsRUFDcEIsSUFBSSxDQUNMLENBQUE7QUFDSCxDQUFDO0FBbEJELGdEQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzb24gfSBmcm9tICdjby1ib2R5J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdEFsbENhbmNlbGxhdGlvbnMoY3R4OiBDb250ZXh0KSB7XG4gIGNvbnN0IHtcbiAgICBjbGllbnRzOiB7IGdpZnRDYXJkUHJvdmlkZXIgfSxcbiAgICB2dGV4OiB7XG4gICAgICByb3V0ZToge1xuICAgICAgICBwYXJhbXM6IHsgZ2lmdENhcmRJZCwgaWQgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IGN0eFxuXG4gIGN0eC5zdGF0dXMgPSAyMDBcbiAgY3R4LmJvZHkgPSBnaWZ0Q2FyZFByb3ZpZGVyLmxpc3RBbGxDYW5jZWxsYXRpb25zKFxuICAgIGlkIGFzIHN0cmluZyxcbiAgICBnaWZ0Q2FyZElkIGFzIHN0cmluZ1xuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5jZWxsYXRpb24oY3R4OiBDb250ZXh0KSB7XG4gIGNvbnN0IGJvZHk6IENyZWF0ZUNhbmNlbGxhdGlvbkJvZHkgPSBhd2FpdCBqc29uKGN0eC5yZXEpXG5cbiAgY29uc3Qge1xuICAgIGNsaWVudHM6IHsgZ2lmdENhcmRQcm92aWRlciB9LFxuICAgIHZ0ZXg6IHtcbiAgICAgIHJvdXRlOiB7XG4gICAgICAgIHBhcmFtczogeyBnaWZ0Q2FyZElkLCBpZCB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9ID0gY3R4XG5cbiAgY3R4LnN0YXR1cyA9IDIwMFxuICBjdHguYm9keSA9IGdpZnRDYXJkUHJvdmlkZXIuY3JlYXRlQ2FuY2VsbGF0aW9uKFxuICAgIGlkIGFzIHN0cmluZyxcbiAgICBnaWZ0Q2FyZElkIGFzIHN0cmluZyxcbiAgICBib2R5XG4gIClcbn1cbiJdfQ==