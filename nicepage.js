
// ---------------- ACA COMIENZA EL SIMULADOR DE GASTOS ---------------------- //

let saldo = 0, alquiler, salario;

function ingresarsalario() {
    salario = Number(document.getElementsByName("salario")[0].value);

    if (isNaN(salario)) {
        swal("IT'S NOT A VALID AMOUNT");
        return;
    }

    saldo = salario;

}



function ingresaralquiler() {
    alquiler = Number(document.getElementsByName("alquiler")[0].value);

    if (isNaN(alquiler)) {
        swal("IT'S NOT A VALID AMOUNT");
        return;
    }

    if (alquiler > saldo) {
        swal("YOUR RENT IS MORE THAN YOUR SALARY");
        return;
    }

    if (alquiler > ((saldo * 50) / 100)) {
        swal("UPS! <<<<DANGER>>>>, YOUR RENT IS MORE THAN 50% OF YOUR SALARY");return;}
        
        
    if (alquiler <= ((saldo * 50) / 100)) { 
        swal("CONGRATULATIONS !!! YOUR RENT IS LESS THAN 50% PERCENT OF YOUR SALARY");
     return;}



    
}

function verificar() {
    document.getElementsByName("verificacion")[0].value = saldo = saldo - alquiler;
}

function ahorro() {
    document.getElementsByName("obtener")[0].value = ((salario - alquiler) * 20) / 100;
}

function gastodiario() {
    alert(("AMOUNT FOR SPEND DAILY") + ("  ") + (saldo - (saldo * 20) / 100) / 30);
    return;
}


// ---------- FIN DEL SIMULADOR DE GASTOS ---------------------------------//







// ----------  ACA COMIENZA EL SIMULADOR DE INVERSIONES ---------------------//


    let myApp = angular.module('myApp', []);


    myApp.controller('calculatorCtrl', function($scope) 

{
    let objmeses=[];
function Calular_rendimiento(montoInicial,rendimiento,dias)

{
return (montoInicial*rendimiento/100*dias)/360;
   
}
   
function calcTotal(monto_inicial,monto_mensual, porcentaje, meses){
    let total_monto = monto_inicial;
    let rendimiento = (total_monto*porcentaje/100)/12;
    let total_rendimiento = rendimiento;

    for( let mes = 0; mes <=meses; mes++){
        
    if(mes === 0){
         
}
    else{
          total_monto+=rendimiento+monto_mensual;
          rendimiento=(total_monto*porcentaje/100)/12;
          total_rendimiento +=rendimiento; 

}
        
        objmeses.push({"mes" : (mes+1), "monto": total_monto, "rendimiento":rendimiento});

}

    return [total_monto+rendimiento,total_rendimiento];
}

function JSONToCSVConvertor(JSONData,ShowLabel) {    
    let arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;   
    let CSV = '';     
    if (ShowLabel) {
    let row = "";
    for (let index in arrData[0]) {
         row += index + ',';
}
        row = row.slice(0, -1);
        CSV += row + '\r\n';
}


    for (let i = 0; i < arrData.length; i++) {
    let row = "";
    for (let index in arrData[i]) {
    let arrValue = arrData[i][index] == null ? "" : '="' + arrData[i][index] + '"';
        row += arrValue + ',';
}
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
}


    if (CSV == '') {        
    growl.error("Invalid data");
    return;

  }  

    let fileName = "Result";
    if(msieversion()){
    let IEwindow = window.open();
        IEwindow.document.write('sep=,\r\n' + CSV);
        IEwindow.document.close();
        IEwindow.document.execCommand('SaveAs', true, fileName + ".csv");
        IEwindow.close();
  } 
  
    else {
    let uri = 'data:application/csv;charset=utf-8,' + escape(CSV);
    let link = document.createElement("a");    
        link.href = uri;
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}
}

function msieversion() {
    let ua = window.navigator.userAgent; 
    let msie = ua.indexOf("MSIE "); 
    if (msie != -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
  {
    return true;
  } else {
    return false;
  }
}
function reset(){
      
      $scope.objmeses=[];
      $scope.result =[];
}

function download(){
    let data = objmeses;
        data.push({"monto":$scope.result[0],"rendimiento": $scope.result[1]});

    if(data != '')
      JSONToCSVConvertor(data, true);
    else
      alert("no existe una tabla actual");
    
}
   
        $scope.calc = calcTotal;
        $scope.calculador = Calular_rendimiento;
        $scope.objmeses= objmeses; 
        $scope.reset=reset;
        $scope.download=download;
   
   
});  
 
// ------------------ FIN DEL SIMULADOR DE INVERSIONES ------------------------- //
