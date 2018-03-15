$.ajax(
  {url:'https://api-to-call.com/endpoint',
   type:'GET',
   dataType:'json',
   //handles response if successful
   success(response){
     console.log(response);
   },
   //handles response if unsuccessful
   error(jqXHR,status,errorThrown){
     console.log(jqXHR)
   }
  });