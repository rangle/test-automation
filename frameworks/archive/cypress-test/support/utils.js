export function mockAvailabilityCall(fixture) {
    return {
        method: 'POST',
        url: 'ws/en/products/availability-pip',
        response: `fixture:../fixtures/${fixture}`
    }
}