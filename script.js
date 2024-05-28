var feet=document.getElementById('feet');
var inch=document.getElementById('inches');
var input=document.getElementById('input');
var result=document.getElementById('result');
var result1=document.getElementById('result1');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var btn=document.getElementById('btn');
var inputTypeValue,resultTypeValue;



// initial value
inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

btn.addEventListener('click',function  myResult(){
    // update input and output
    inputTypeValue=inputType.value;
    resultypeValue=resultType.value;

    // START OF  LENGTH COVERSIONS
    if(inputTypeValue==='inch' && resultTypeValue==='centimeter'){
        result.value=Number(input.value)*2.54;
        result1.value=Number(input.value)*2.54;
    }else if(inputTypeValue==='inch' && resultTypeValue==='foot'){
        result.value=Number(input.value)*0.0833;
        result1.value=Number(input.value)*0.0833;
    }else if(inputTypeValue==='inch' && resultTypeValue==='yard'){
        result.value=Number(input.value)*0.0278;
        result1.value=Number(input.value)*0.0278;
    }else if(inputTypeValue==='inch' && resultTypeValue==='mile'){
        result.value=Number(input.value)*0.0000158;
        result1.value=Number(input.value)*0.0000158;
    }else if(inputTypeValue==='inch' && resultTypeValue==='kilometer'){
        result.value=Number(input.value)*0.0000254;
        result1.value=Number(input.value)*0.0000254;
    }else if(inputTypeValue==='inch' && resultTypeValue==='inch'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }



    if(inputTypeValue==='foot' && resultypeValue==='centimeter'){
    
        result.value=Number(input.value)*30.48;
        result1.value=Number(input.value)*30.48;
    }else if(inputTypeValue==='foot' && resultTypeValue==='inch'){
        result.value=Number(input.value)*12;
        result1.value=Number(input.value)*12;
    }else if(inputTypeValue==='foot' && resultTypeValue==='yard'){
        result.value=Number(input.value)*0.3333;
        result1.value=Number(input.value)*0.3333;
    }else if(inputTypeValue==='foot' && resultTypeValue==='mile'){
        result.value=Number(input.value)*0.0001894;
        result1.value=Number(input.value)*0.0001894;
    }else if(inputTypeValue==='foot' && resultTypeValue==='kilometer'){
        result.value=Number(input.value)*0.3048;
        result1.value=Number(input.value)*0.3048;
    }else if(inputTypeValue==='foot' && resultTypeValue==='foot'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='yard' && resultypeValue==='centimeter'){
        result.value=(Number(input.value)*(91.44));
        result1.value=(Number(input.value)*(91.44));
    }else if(inputTypeValue==='yard' && resultTypeValue==='inch'){
        result.value=Number(input.value)*36;
        result1.value=Number(input.value)*36;
    }else if(inputTypeValue==='yard' && resultTypeValue==='foot'){
        result.value=Number(input.value)*3;
        result1.value=Number(input.value)*3;
    }else if(inputTypeValue==='yard' && resultTypeValue==='mile'){
            result.value=Number(input.value)*0.0005682;
            result1.value=Number(input.value)*0.0005682;
    }else if(inputTypeValue==='yard' && resultTypeValue==='kilometer'){
            result.value=Number(input.value)*0.9144;
            result1.value=Number(input.value)*0.9144;
    }else if(inputTypeValue==='yard' && resultTypeValue==='yard'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='mile' && resultypeValue==='kilometer'){
        result.value=(Number(input.value)/(1.60934));
        result1.value=(Number(input.value)/(1.60934));
    }else if(inputTypeValue==='mile' && resultTypeValue==='inch'){
        result.value=Number(input.value)*63360;
        result1.value=Number(input.value)*63360;
    }else if(inputTypeValue==='mile' && resultTypeValue==='yard'){
        result.value=Number(input.value)*1760;
        result1.value=Number(input.value)*1760;
    }else if(inputTypeValue==='mile' && resultTypeValue==='centimeter'){
        result.value=Number(input.value)*160934;
        result1.value=Number(input.value)*160934;
    }else if(inputTypeValue==='mile' && resultTypeValue==='mile'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='centimeter' && resultypeValue==='inch'){
        result.value=(Number(input.value)/(2.54));
        result1.value=(Number(input.value)/(2.54));
    }else if(inputTypeValue==='centimeter' && resultTypeValue==='foot'){
        result.value=(Number(input.value))/(30.48);
        result1.value=(Number(input.value))/(30.48);
    }else if(inputTypeValue==='centimeter' && resultTypeValue==='yard'){
            result.value=(Number(input.value))/(91.44);
            result1.value=(Number(input.value))/(91.44);
    }else if(inputTypeValue==='centimeter' && resultTypeValue==='centimeter'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='kilometer' && resultypeValue==='mile'){
        result.value=(Number(input.value)/(1.60934));
        result1.value=(Number(input.value)/(1.60934));
    }else if(inputTypeValue==='kilometer' && resultTypeValue==='inch'){
        result.value=Number(input.value)*39370.1;
        result1.value=Number(input.value)*39370.1;
    }else if(inputTypeValue==='kilometer' && resultTypeValue==='foot'){
        result.value=Number(input.value)*3280.84;
        result1.value=Number(input.value)*3280.84;
    }else if(inputTypeValue==='kilometer' && resultTypeValue==='yard'){
        result.value=Number(input.value)*1093.61;
        result1.value=Number(input.value)*1093.61;
    }else if(inputTypeValue==='kilometer' && resultTypeValue==='centimeter'){
        result.value=Number(input.value)*100000;
        result1.value=Number(input.value)*100000;
    }else if(inputTypeValue==='kilometer' && resultTypeValue==='kilometer'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }
    // END OF LENGTH CONVERSIONS


    // START OF WEIGHT COVERSIONS
    if(inputTypeValue==='pound' && resultTypeValue==='kilograms'){
        result.value=Number(input.value)*0.453592;
        result1.value=Number(input.value)*0.453592;
    }else if(inputTypeValue==='pound' && resultTypeValue==='ounce'){
        result.value=Number(input.value)*16;
        result1.value=Number(input.value)*16;
    }else if(inputTypeValue==='pound' && resultTypeValue==='ton'){
        result.value=Number(input.value)*0.0005;
        result1.value=Number(input.value)*0.0005;
    }else if(inputTypeValue==='pound' && resultTypeValue==='grams'){
        result.value=Number(input.value)*453.592;
        result1.value=Number(input.value)*453.592;
    }else if(inputTypeValue==='pound' && resultTypeValue==='pound'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='ounce' && resultypeValue==='grams'){
        result.value=Number(input.value)*28.3495;
        result1.value=Number(input.value)*28.3495;
    }else if(inputTypeValue==='ounce' && resultypeValue==='pound'){
        result.value=Number(input.value)*0.0625;
        result1.value=Number(input.value)*0.0625;
    }else if(inputTypeValue==='ounce' && resultypeValue==='ton'){
        result.value=Number(input.value)*0.00003125;
        result1.value=Number(input.value)*0.00003125;
    }else if(inputTypeValue==='ounce' && resultypeValue==='kilogram'){
        result.value=Number(input.value)*0.0283495;
        result1.value=Number(input.value)*0.0283495;
    }else if(inputTypeValue==='ounce' && resultTypeValue==='ounce'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='ton' && resultypeValue==='kilograms'){
        result.value=(Number(input.value)*(907.185));
        result1.value=(Number(input.value)*(907.185));
    }else if(inputTypeValue==='ton' && resultypeValue==='pounds'){
        result.value=(Number(input.value)*(2000));
        result1.value=(Number(input.value)*(2000));
    }else if(inputTypeValue==='ton' && resultypeValue==='ounce'){
        result.value=(Number(input.value)*(32000));
        result1.value=(Number(input.value)*(32000));
    }else if(inputTypeValue==='ton' && resultTypeValue==='ton'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='kilograms' && resultypeValue==='pound'){
        result.value=(Number(input.value)/(0.453592));
        result1.value=(Number(input.value)/(0.453592));
    }else if(inputTypeValue==='kilograms' && resultTypeValue==='ton'){
        result.value=(Number(input.value))/(907.185);
        result1.value=(Number(input.value))/(907.185);
    }else if(inputTypeValue==='kilograms' && resultTypeValue==='gram'){
        result.value=(Number(input.value))*(907.185);
        result1.value=(Number(input.value))*(907.185);
    }else if(inputTypeValue==='kilograms' && resultTypeValue==='kilograms'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='grams' && resultypeValue==='ounce'){
        result.value=(Number(input.value)/(28.3495));
        result1.value=(Number(input.value)/(28.3495));
    }else if(inputTypeValue==='grams' && resultypeValue==='pound'){
        result.value=(Number(input.value)*(0.00220462));
        result1.value=(Number(input.value)*(0.00220462));
    }else if(inputTypeValue==='grams' && resultypeValue==='ton'){
        result.value=(Number(input.value)*(0.0000011));
        result1.value=(Number(input.value)*(0.0000011));
    }else if(inputTypeValue==='grams' && resultTypeValue==='grams'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }
    // END OF WEIGHT CONVERSIONS

    // START OF TEMPERATURE COVERSIONS
    if(inputTypeValue==='celsius' && resultTypeValue==='fahrenheit'){
        result.value=(Number(input.value)*1.8)+32;
        result1.value=(Number(input.value)*1.8)+32;
    }else if(inputTypeValue==='celsius' && resultTypeValue==='kelvin'){
        result.value=Number(input.value)+273.15;
        result1.value=Number(input.value)*273.15;
    }else if(inputTypeValue==='celsius' && resultTypeValue==='celsius'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }



    if(inputTypeValue==='fahrenheit' && resultypeValue==='celsius'){
    
        result.value=(Number(input.value)-32)/1.8;
        result1.value=(Number(input.value)-32)/1.8;
    }else if(inputTypeValue==='fahrenheit' && resultypeValue==='kelvin'){
    
        result.value=(Number(input.value)-32)*1.8+273.15;
        result1.value=(Number(input.value)-32)*1.8+273.15;
    }else if(inputTypeValue==='fahrenheit' && resultTypeValue==='fahrenheit'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    if(inputTypeValue==='kelvin' && resultypeValue==='celsius'){
        result.value=(Number(input.value)-(273.15));
        result1.value=(Number(input.value)-(273.15));
    }else if(inputTypeValue==='kelvin' && resultypeValue==='fahrenheit'){
    
        result.value=(Number(input.value)-273.15)*1.8+32;
        result1.value=(Number(input.value)-273.15)*1.8+32;
    }else if(inputTypeValue==='kelvin' && resultTypeValue==='kelvin'){
        result.value=Number(input.value);
        result1.value=Number(input.value);
    }

    //END OF TEMPERATURE CONVERSIONS
})