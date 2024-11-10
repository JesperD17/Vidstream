export function remover () {
    var elements = document.querySelectorAll('.remove');
    for(var i=0; i < elements.length; i++){
        elements[i].parentNode.removeChild(elements[i]);
    }
}