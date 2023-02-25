'use strict'

class Instruments{
    constructor(name, model, onOff, watt) {
        this.name = name;
        this.model = model;
        this.onOff = onOff;
        this.watt = watt;
    };
    calcWatt(watt) {
        return this.watt * 24;
    };
}

class Plotter extends Instruments{
    constructor(name, model, onOff, watt, hasEthernet=true){
        super(name, model, onOff, watt);
        this.hasEthernet = hasEthernet;
    };
    totalPrint(pages){
    console.log(`${pages} листов распечатаются ${pages * 0.6} мин`);
    };
}

class Printer extends Instruments{
    constructor(name, model, onOff, watt, hasScaner=true) {
        super(name, model, onOff, watt);
        this.hasScaner = hasScaner
    };
    tonerGram(pages){
    console.log(`${pages * 0.2} гр. тонера расходуется за ${pages} листов`);
  };
}

const plotter = new Plotter('Canon',"IPF680", true, 250, true);
const printer = new Printer("Epson", "L811", true, 160, true);

plotter.totalPrint(10);
printer.tonerGram(185);

console.log(plotter.name + " " + plotter.model);
console.log(printer.name + " " + printer.model);

const instrumentList = [plotter, printer]
let watt = 0;
function totalWatt(_list){
    for(let item of _list){
        if(item.onOff){
            watt += item.calcWatt()
        }
    }
    return watt
}
console.log(`Общая потреблаемая мощность за сутки ${totalWatt(instrumentList)} Ватт`)