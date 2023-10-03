//Arrange
var min=37*5;
var max=37*10;
numr=Math.floor(Math.random() * (max - min) + min);
numrul=numr%37;
//Act
//Assert
test(`valor retornado no debe ser mayor a  ${numrul}`, () => {
    expect(numrul).toBeGreaterThanOrEqual(0);
    expect(numrul).toBeLessThanOrEqual(36);
});