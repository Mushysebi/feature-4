//Arrange
NroDeJuegoAnt = 0;

//Act
NroDeJuegoActual = 0;
//Assert
while (NroDeJuegoActual<10){
    NroDeJuegoActual=NroDeJuegoActual+1;
test(`valor retornado no debe ser mayor que ${NroDeJuegoActual}`, () => {
    expect(NroDeJuegoActual).toBeGreaterThanOrEqual(1);
    expect(NroDeJuegoActual).toBeLessThanOrEqual(10);
});
    NroDeJuegoAnt=NroDeJuegoActual-1;
}