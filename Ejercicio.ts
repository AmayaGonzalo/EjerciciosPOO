class Rueda{
    private rodado: number;
    private color: string;

    constructor (pRodado: number, pColor: string){
        this.rodado = pRodado;
        this.color = pColor;
    }    
}

class Motor{
    private tipo: string;

    constructor (pTipo: string){
        this.tipo = pTipo;
    }
}

class Auto{
    private marca: string;
    private modelo: string;
    private anio: number;
    private rueda: Rueda;
    private motor: Motor;
    private encendidoApagado: boolean;
    private kilometros: number;

    constructor (pMarca: string, pModelo: string, pAnio: number, pRueda: Rueda, pMotor: Motor, pkilometros: number){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
        this.rueda = pRueda;
        this.motor = pMotor;  
        this.kilometros = pkilometros;   
    }

    public encenderApagar():void{
        if(this.encendidoApagado)
            this.encendidoApagado = false
        else{
            this.encendidoApagado = true;
        }
    }

    public aumentarVelocidad(pVelocidad):void{
        this.kilometros = this.kilometros + pVelocidad;
    }
}

let primeraRueda : Rueda = new Rueda (16,"Negro");
let segundaRueda : Rueda = new Rueda (21,"Negro");
let terceraRueda : Rueda = new Rueda (18,"Gris");
let cuartaRueda : Rueda = new Rueda (20,"Simple");
let ruedas : Rueda [] = [primeraRueda, segundaRueda,terceraRueda,cuartaRueda];

let primerMotor : Motor = new Motor("perkins");
let segundoMotor : Motor = new Motor("8V");
let Motores : Motor[] = [primerMotor,segundoMotor]

let primerAuto : Auto = new Auto("ford","Fiesta",2022,primeraRueda,primerMotor,0);
primerAuto.aumentarVelocidad(30);

console.log (primerAuto);
console.log (ruedas);
console.log (Motores);


