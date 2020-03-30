//* Video Tutorial link : https://www.youtube.com/watch?v=7l-ZAuU8TXc&list=PLhAYqyL8bdjy10dbfKoxnO4CXyGR9quCs&index=3
//* Tutorial title : Weight Converter App With JavaScript & Bootstrap 4

function indexFunction(){
    let inputValue = document.getElementById('inputValue').value;
    let baseWeight = document.getElementById('baseWeight').value;

    if (inputValue != "" && baseWeight != ""){
        switch(baseWeight) {
            case "g":
                basedOnGrams(inputValue);
              break;
            case "mg":
                alert("this is mg")
              break;
            case "kg":
                alert("this is kg")
              break;
            default:
          }
    }
}

const basedOnGrams = (inputValue) => {
    let outputGrams = (inputValue * 1);
    document.getElementById('gramsOutput').innerHTML = outputGrams;

    const gramEquivalentInKilogram = 0.001;
    let outputKilograms = (inputValue * gramEquivalentInKilogram);
    document.getElementById('kgOutput').innerHTML = outputKilograms;

    const gramEquivalentInOunce = 0.03527396195;
    let outputOunces = (inputValue * gramEquivalentInOunce);
    document.getElementById('ozOutput').innerHTML = outputOunces;

    const gramEquivalentInMilligrams = 1000;
    let outputMilligrams = (inputValue * gramEquivalentInMilligrams);
    document.getElementById('mgOutput').innerHTML = outputMilligrams;

    const gramEquivalentInPounds = 0.0022046223414059875;
    let outputPounds = (inputValue * gramEquivalentInPounds);
    document.getElementById('lbOutput').innerHTML = outputPounds;

    const gramEquivalentInTroyOunces = 0.032;
    let outputTroyOunces = (inputValue * gramEquivalentInTroyOunces);
    document.getElementById('oztOutput').innerHTML = outputTroyOunces;

    const gramEquivalentInPennyweight = 0.643;
    let outputPennyweight = (inputValue * gramEquivalentInPennyweight);
    document.getElementById('dwtOutput').innerHTML = outputPennyweight;

    const gramEquivalentInCarat = 5;
    let outputCarat = (inputValue * gramEquivalentInCarat);
    document.getElementById('ctOutput').innerHTML = outputCarat;

    const gramEquivalentInTicals = 0.061200000000000004;
    let outputTicals = (inputValue * gramEquivalentInTicals);
    document.getElementById('ticalsOutput').innerHTML = outputTicals;

    const gramEquivalentInMommes = 0.026659999999999996;
    let outputMommes = (inputValue * gramEquivalentInMommes);
    document.getElementById('mmOutput').innerHTML = outputMommes;

    const gramEquivalentGrains = 15.430000000000007;
    let outputGrains = (inputValue * gramEquivalentGrains);
    document.getElementById('grOutput').innerHTML = outputGrains;

    const gramEquivalentInNewtons = 0.009;
    let outputNewtons = (inputValue * gramEquivalentInNewtons);
    document.getElementById('newtonsOutput').innerHTML = outputNewtons;

    const gramEquivalentInTaelsSingapore = 0.026400000000000003;
    let outputTaelsSingapore = (inputValue * gramEquivalentInTaelsSingapore);
    document.getElementById('tsgOutput').innerHTML = outputTaelsSingapore;

    const gramEquivalentInTaelsRepublicOfChina = 0.026600000000000002;
    let outputTaelsRepublicOfChina = (inputValue * gramEquivalentInTaelsRepublicOfChina);
    document.getElementById('trocOutput').innerHTML = outputTaelsRepublicOfChina;

    const gramEquivalentInTaelsHongKong = 0.026000000000000002;
    let outputTaelsHongKong = (inputValue * gramEquivalentInTaelsHongKong);
    document.getElementById('thkOutput').innerHTML = outputTaelsHongKong;

    const gramEquivalentInTons = 0.00001;
    let outputTons = (inputValue * gramEquivalentInTons);
    document.getElementById('tonOutput').innerHTML = outputTons;

    const gramEquivalentInMicrograms = 1000000;
    let outputMicrograms = (inputValue * gramEquivalentInMicrograms);
    document.getElementById('mcgOutput').innerHTML = outputMicrograms;

    const gramEquivalentInStones = 0.00015747302439;
    let outputStones = (inputValue * gramEquivalentInStones);
    document.getElementById('stOutput').innerHTML = outputStones;
};