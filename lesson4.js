'use strict'

function Instruments(name, model, onOff, watt){
  this.name = name;
  this.model = model;
  this.onOff = onOff;
  this.watt = watt;
}
Instruments.prototype.calcWatt = function(watt){
    console.log(this.watt * 24);
};

function Plotter(name, model, onOff=true, wide, hasEthernet=true, watt){
     Instruments.call(this, name, model, onOff, watt);
     this.wide = wide;
     this.hasEthernet = hasEthernet;
     this.totalPrint = function(pages){
    console.log(`${pages} листов распечатаются ${pages * 0.6} мин`);
    };
}

function Printer(name, model, onOff=true, hasScaner=true, watt){
    Instruments.call(this, name, model, onOff, watt);
    this.hasScaner = hasScaner;
    this.tonerGram = function (pages){
    console.log(`${pages * 0.2} гр. тонера расходуется за ${pages} листов`);
  };
}

Plotter.prototype = new Instruments();
Printer.prototype = new Instruments();

const plotter = new Plotter('Canon', "IPF680", true, true, 'A1', 250);
const printer = new Printer("Epson", "L811", true, true, 160);

plotter.totalPrint(10);
printer.tonerGram(185);

console.log(plotter.name + " " + plotter.model);
console.log(printer.name + " " + printer.model);

const instrumentList = [plotter, printer]
let watt = 0;
function totalWatt(_list){
    for(let item of _list){
        if(item.onOff){
            watt += item.watt
        }
    }
    return watt
}
console.log(`Общая потреблаемая мощность за сутки ${totalWatt(instrumentList)} Ватт`)