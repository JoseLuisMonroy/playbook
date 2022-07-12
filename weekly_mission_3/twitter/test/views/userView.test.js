const userView = require('./../../app/views/userView');

describe("Pruebas unitarias para User view", () => {
    test('Regresar un objeto nulo cuando se intenta crear un usuario sin pago', () => {
        const payload = null;
        const result = userView.create(payload);

        expect(result.error).toMatch(/Pago no encontrado/);
    });
    test('Regresar un objeto nulo cuando se intenta crear un usaurio con pago pero propiedades invalidas', () => {
        const payload = { username: null, name: "Jose", id: "1" };
        const result = userView.create(payload);

        expect(result.error).toMatch(/Necesita tener un valor válido/);
    });
    test('Regresar un objeto error cuando se intenta crear un usaurio sin algun rubro', () => {
        const payload = { username: "MonroyJF", name: "Jose" };
        const result = userView.create(payload);

        expect(result.error).toMatch(/Hace falta un rubro/);
    });
});