function Converter(){ 
  valorInput = parseFloat(document.getElementById("valor").value);
  let dolarComercial = 5.26;
  let valorReal = valorInput * dolarComercial;

  let result = `U$${valorInput} equivale a R$${valorReal.toFixed(2)}`;
  document.getElementById('valorConvertido').innerHTML = `<h2>${result}</h2>`;
}

function converterTemperatura(){ 
  valorInput = parseFloat(document.getElementById("valorTemp").value);
  let valorFahrenheit = ((valorInput * 9)/5) + 32;

  let result = `${valorInput}Cº equivale a ${valorFahrenheit.toFixed(1)}Fº`;
  document.getElementById('tempConvertido').innerHTML = `<h2>${result}</h2>`;
}

function converterDistanciaAstronomica(){ 
  valorInput = parseFloat(document.getElementById("valorParsec").value);
  let anoLuz = 3.26156;
  let parsecConvertido = valorInput * anoLuz;

  let result = `${valorInput} Parsecs equivalem a ${parsecConvertido.toFixed(4)} anos-luz.`;
  document.getElementById('anosLuzConvertido').innerHTML = `<h2>${result}</h2>`;
}