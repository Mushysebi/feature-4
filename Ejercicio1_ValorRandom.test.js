//Arrange
var min=37*5;
var max=37*10;
numr=Math.floor(Math.random() * (max - min) + min);
//Act
//Assert
test(`valor retornado no debe ser mayor a ${numr}`, () => {
    expect(numr).toBeGreaterThanOrEqual(37*5);
    expect(numr).toBeLessThanOrEqual(37*10);
});