$(document).ready(function (){
   //find div
    var div = $('div.showcase');
    var div2= $('div.showcase2');
     var div3 = $('div.showcase3');
    //find ul width
    var liNum = $(div).find('ul').children('li').length;
    var speed = 1200;
    var containerWidth = 200;
    var itemWidth = 212;
    //Remove scrollbars
    $(div).css({overflow: 'hidden'});
    $('div.right-arrow').click(function(e){	
          if(($(div).scrollLeft()+containerWidth)<(liNum*itemWidth)){
             $(div).animate({
                scrollLeft: '+='+containerWidth
              }, speed);
          }
      
        
    });	
    $('div.left-arrow').click(function(e){	
           if(($(div).scrollLeft()+containerWidth)>containerWidth){
                $(div).animate({
                scrollLeft: '-='+containerWidth
              }, speed);
        }
    });
     $('div.right-arrow1').click(function(e){	
          if(($(div2).scrollLeft()+containerWidth)<(liNum*itemWidth)){
             $(div2).animate({
                scrollLeft: '+='+containerWidth
              }, speed);
          }
    });	
    $('div.left-arrow1').click(function(e){	
           if(($(div2).scrollLeft()+containerWidth)>containerWidth){
                $(div2).animate({
                scrollLeft: '-='+containerWidth
              }, speed);
        }
    });
     $('div.right-arrow2').click(function(e){	
          if(($(div3).scrollLeft()+containerWidth)<(liNum*itemWidth)){
             $(div3).animate({
                scrollLeft: '+='+containerWidth
              }, speed);
          }
    });	
    $('div.left-arrow2').click(function(e){	
           if(($(div3).scrollLeft()+containerWidth)>containerWidth){
                $(div3).animate({
                scrollLeft: '-='+containerWidth
              }, speed);
        }
    });
  
    
    
    
    
    
    
    
   /*  
    
 var badgeupdate=0;
   function buybutfunction(){
       badgeupdate++;
      document.getElementById('badge_no').textContent=+badgeupdate;
    
   }
    
   var buybutton= document.getElementById('buybut');
   

   buybutton.addEventListener('click', buybutfunction);
   buybutton1.addEventListener('click',function(){
document.getElementById("produpdate").innerHTML = " <div class='product-image'><img src='https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png'></div><div class='product-details'><div class='product-title'>Nutro™ Adult Lamb and Rice Dog Food</div><p class='product-description'>Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p></div><div class='product-price'>45.99</div><div class='product-quantity'><input type='number' value='1' min='1'></div><div class='product-removal'><button class='remove-product'>Remove</button></div><div class='product-line-price'>45.99</div>";
        
    });
    
*/
    
    
    var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
 

// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    else if(event.target == modal2){
        modal2.style.display = "none"; 
    }
}

      
    /* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
    







     
});




