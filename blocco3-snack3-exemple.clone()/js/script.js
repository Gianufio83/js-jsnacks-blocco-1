// alert('Ciao');

$(document).ready(
  function() {
    var todoThings = [
      'tagliare alberi',
      'comprare oggetti',
      'prenotare pranzo',
      'chiamare dirigente',
    ];
    for (var i = 0; i < todoThings.length; i++) {
      var elementThings = $('.template li').clone();
      elementThings.append(todoThings[i]);
      $('.todo').append(elementThings);
    }
    $(document).on('click', '.todo li span', function () {
      $(this).parent().remove();
    });
    $('#add-element').keypress(function (event) {
      if (event.which == 13 || event.keynote == 13) {
        var testo = $('#add-element').val();
        console.log(testo);
        var testoNuovo = $('.template li').clone();
        testoNuovo.append(testo);
         $('.todo').append(testoNuovo);
      }
    });
  }
);




















// $(document).ready(
//   function () {
//     var todoList = [
//       'prendere il latte',
//       'scrivere mail a Giuseppe',
//       'comprare coniglio',
//       'pagare bolletta'
//     ];
//
//     for (var i = 0; i < todoList.length; i++) {
//       var elementList = $('.template li').clone();
//       elementList.append(todoList[i]);
//       $('.todo').append(elementList);
//     }
//
//     $(document).on('click', '.todo li span', function () {
//       $(this).parent().remove();
//     });
//
//     $('#add-element').keypress(
//       function (event) {
//         if(event.which == 13 || event.keyCode == 13) {
//           var text = $('#add-element').val();
//           console.log(text);
//           var elementNew = $('.template li').clone();
//           elementNew.append(text);
//           $('.todo').append(elementNew);
//         }
//       }
//     );
//
//   }
// );
