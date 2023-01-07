function encodeHTML(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

function isEmpty(variable) {

    if (Array.isArray(variable)) {
      if (variable.length == 0) return true;
  
      return false;
    }
  
    if (variable == null || variable == " " || typeof variable == "undefined")
      return true;
  
    return false;
  }
  
  function isIndexFalse(index){
  
    if(index == -1){
      return true ;
    }
    
  }
  
  function isFalse(){
  
  }
  
  function isTrue(){
    
  }

  function clearSpace(data){
    return data.trim();
  }

module.exports.encodeHTML =  encodeHTML ;
module.exports.removeTags =  removeTags ;
module.exports.isEmpty =  isEmpty ;
module.exports.clearSpace =  clearSpace ;