function calculateBudget() {
  if(validForm()) {
    var numberOfDragons = parseInt($('form #dragon-number').val()),
        individualCost = 0;

    $('form .budget input').each(function(){ //for loop cycles each input on budget form
      individualCost += parseInt($(this).val()); //adds each input together
    });

    var totalCost = (individualCost + numberOfDragons) * 12;
    // openModal('# Dragons' + numberOfDragons);
    openModal('Wow! It will cost $' + totalCost + ' each year for ' + numberOfDragons + ' Dragons');

    // alert('Form is VALID!');
  }else {
    //form not valid!
    // alert('Form is NOT VALID!');
    openModal('Please Fill Out All Inputs');
  }
}

function validForm() {
  var numberOfFields = $('form input').length, 
    numberOfValidFields = 0;

  $('form input').each(function() {
      if ($(this).val().length !== 0) { //this = user input
        numberOfValidFields += 1;
      }
  });
  return numberOfFields === numberOfValidFields;
}

function openModal (content) {
  // Modal Handling Goes Here
  // Takes a string as an argument to know what to display
  closeModal();
  var closeBtn = '<div class="modal-close">Close</div>';
  $('body').append('<div class="modal">' + closeBtn + content + '</div>');
  $('.modal-close').one('click', closeModal); //event listener, can only be called once
}

function closeModal() {
  $('.modal').remove();
}

$('form a.calculate').on('click', calculateBudget); //activates calculate button. 
