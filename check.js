


document.getElementById('a').onclick = function(){
  if(document.getElementById('a').checked===true){
      if(document.getElementById('b').checked===true)
    document.getElementById('b').checked=false;
  }
    
}


document.getElementById('b').onclick = function(){

    if(document.getElementById('b').checked===true){
        if(document.getElementById('a').checked===true)
      document.getElementById('a').checked=false;
    }
}



document.getElementById('ab').onclick = function(){
    if(document.getElementById('ab').checked===true){
        if(document.getElementById('bc').checked===true)
      document.getElementById('bc').checked=false;
    }
      
  }
  
  
  document.getElementById('bc').onclick = function(){
  
      if(document.getElementById('bc').checked===true){
          if(document.getElementById('ab').checked===true)
        document.getElementById('ab').checked=false;
      }
  }





  
document.getElementById('ab6').onclick = function(){
    if(document.getElementById('ab6').checked===true){
        if(document.getElementById('bc6').checked===true)
      document.getElementById('bc6').checked=false;
    }
      
  }
  
  
  document.getElementById('bc6').onclick = function(){
  
      if(document.getElementById('bc6').checked===true){
          if(document.getElementById('ab6').checked===true)
        document.getElementById('ab6').checked=false;
      }
  }



  document.getElementById('bc7').onclick = function(){
  
    if(document.getElementById('bc7').checked===true){
        if(document.getElementById('ab7').checked===true)
      document.getElementById('ab7').checked=false;
    }
}




document.getElementById('bc8').onclick = function(){
  
    if(document.getElementById('bc8').checked===true){
        if(document.getElementById('ab8').checked===true)
      document.getElementById('ab8').checked=false;
    }
}



document.getElementById('ab8').onclick = function(){

  if(document.getElementById('bc8').checked===true){
      if(document.getElementById('ab8').checked===true)
    document.getElementById('bc8').checked=false;
  }
}