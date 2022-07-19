$.ajax({
  type:"get",
  url:"https://api.covid19api.com/country/south-africa/status/confirmed",
  success:function(resp){
    for(var i=0;i<resp.length;i++){
      var item='<div>
      <p>$(resp[i])</p>
      </div>';
      $(".items").append(item);

    }
  },
  error:function(error){
    console.log(error);
  }

})
