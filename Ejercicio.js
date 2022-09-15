var Rueda = /** @class */ (function () {
    function Rueda(pRodado, pColor) {
        this.rodado = pRodado;
        this.color = pColor;
    }
    return Rueda;
}());
var Motor = /** @class */ (function () {
    function Motor(pTipo) {
        this.tipo = pTipo;
    }
    return Motor;
}());
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pAnio, pRueda, pMotor, pkilometros) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
        this.rueda = pRueda;
        this.motor = pMotor;
        this.kilometros = pkilometros;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.encendidoApagado)
            this.encendidoApagado = false;
        else {
            this.encendidoApagado = true;
        }
    };
    Auto.prototype.aumentarVelocidad = function (pVelocidad) {
        this.kilometros = this.kilometros + pVelocidad;
    };
    return Auto;
}());
var primeraRueda = new Rueda(16, "Negro");
var segundaRueda = new Rueda(21, "Negro");
var terceraRueda = new Rueda(18, "Gris");
var cuartaRueda = new Rueda(20, "Simple");
var ruedas = [primeraRueda, segundaRueda, terceraRueda, cuartaRueda];
var primerMotor = new Motor("perkins");
var segundoMotor = new Motor("8V");
var Motores = [primerMotor, segundoMotor];
var primerAuto = new Auto("ford", "Fiesta", 2022, primeraRueda, primerMotor, 0);
primerAuto.aumentarVelocidad(30);
console.log(primerAuto);
console.log(ruedas);
console.log(Motores);
