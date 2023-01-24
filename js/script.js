cep = $("[name='cep']");
estado = $("[name='estado']");
cidade = $("[name='cidade']");
bairro = $("[name='bairro']");
endereco = $("[name='endereco']");
url = 'https://cdn.apicep.com/file/apicep/'+cep.val()+'.json'; 
$(document).ready(function(){
   $("button").click(function(){
   
  $.get('https://cdn.apicep.com/file/apicep/'+cep.val()+'.json',
 function(result, status){
     if( status != 'success' ){
        alert("CEP não encontrado");
        return;
     }
     $("[name='cep']").val( result.code );
     estado.val( result.state );
     $("[name='cidade']").val( result.city );
     $("[name='bairro']").val( result.district );
     $("[name='endereco']").val( result.address );
     //alert("Dados recebidos e alterados");
  });

   /*$("input").hide();*/
   });
});


 
