export function batchtest(func, batch = []) {
    batch.forEach(function (value: any) {
        expect(func(value)).toEqual(value);
    });
}
