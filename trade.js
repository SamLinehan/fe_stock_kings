$(document).ready(function(){
  $('.stockSearch').css('display', 'none');
  $('.quantity').css('display', 'none');
  $('.deleteAccountForm').css('display', 'none');
  $('.homeButton').on('click', function(event){
    window.location.href = "./index.html";
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').prop('disabled', true);
    $('.aboutButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('.signin').toggle('500', 'linear');
    $('.leaderboard').toggle('500', 'linear');
    $('.tagline').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#research').css('display', 'none');
    $('#support').css('display', 'none');
    $('#standings').css('display', 'none');
  })
  $('.aboutButton').on('click', function(event){
    $('.portfolio').css('display', 'none');
    $('.stockSearch').css('display', 'none');
    $('.quantity').css('display', 'none');
    $('.balanceHistory').css('display', 'none');
    $('.deleteAccountForm').css('display', 'none');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.aboutButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('#about').toggle('500', 'linear');
    $('#research').css('display', 'none');
    $('#support').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
    $('table').css('display', 'none');
  });
  $('.researchButton').on('click', function(event){
    $('.portfolio').css('display', 'none');
    $('.stockSearch').css('display', 'none');
    $('.quantity').css('display', 'none');
    $('.balanceHistory').css('display', 'none');
    $('.deleteAccountForm').css('display', 'none');
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.aboutButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('#research').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#support').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
    $('table').css('display', 'none');
  });
  $('.standingsButton').on('click', function(event){
    $('.portfolio').css('display', 'none');
    $('.stockSearch').css('display', 'none');
    $('.quantity').css('display', 'none');
    $('.balanceHistory').css('display', 'none');
    $('.deleteAccountForm').css('display', 'none');
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.aboutButton').prop('disabled', false);
    $('.supportButton').prop('disabled', false);
    $('#standings').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#support').css('display', 'none');
    $('#research').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
    $('table').css('display', 'none');
  });
  $('.supportButton').on('click', function(event){
    $('.portfolio').css('display', 'none');
    $('.stockSearch').css('display', 'none');
    $('.quantity').css('display', 'none');
    $('.balanceHistory').css('display', 'none');
    $('.deleteAccountForm').css('display', 'none');
    $('.aboutButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.researchButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.standingsButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.homeButton').css('background-color', 'hsl(226, 96%, 13%)');
    $('.supportButton').prop('disabled', true);
    $('.homeButton').prop('disabled', false);
    $('.researchButton').prop('disabled', false);
    $('.standingsButton').prop('disabled', false);
    $('.aboutButton').prop('disabled', false);
    $('#support').toggle('500', 'linear');
    $('#about').css('display', 'none');
    $('#research').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.signin').css('display', 'none');
    $('.leaderboard').css('display', 'none');
    $('.tagline').css('display', 'none');
    $('table').css('display', 'none');
 });

 $('.userHomeButton').on('click', function(event){
   if($('portfolio').css('display', 'none')){
     $('.portfolio').css('display', '');
     $('#support').css('display', 'none');
     $('#about').css('display', 'none');
     $('#research').css('display', 'none');
     $('#standings').css('display', 'none');
     $('.stockSearch').css('display', 'none');
     $('.quantity').css('display', 'none');
     $('.deleteAccountForm').css('display', 'none');
   }
   if($('.balanceHistory').css('display', 'none')){
     $('.balanceHistory').css('display', '');
   }
 })

$('.tradeButton').on('click', function(event){
  if($('.stockSearch').css('display', 'none')){
    $('.stockSearch').css('display', '');
    $('.quantity').css('display', '');
    $('.portfolio').css('display', 'none');
    $('.balanceHistory').css('display', 'none');
    $('#support').css('display', 'none');
    $('#about').css('display', 'none');
    $('#research').css('display', 'none');
    $('#standings').css('display', 'none');
    $('.deleteAccountForm').css('display', 'none');
  }
})

$('.userSettingsButton').on('click', function(event){
  if($('.deleteAccountForm').css('display', 'none')){
    $('.deleteAccountForm').css('display', '');
    $('.stockSearch').css('display', 'none');
    $('.quantity').css('display', 'none');
    $('.portfolio').css('display', 'none');
    $('.balanceHistory').css('display', 'none');
    $('#support').css('display', 'none');
    $('#about').css('display', 'none');
    $('#research').css('display', 'none');
    $('#standings').css('display', 'none');
  }
})

 $('.homeButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.aboutButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.researchButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.standingsButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });
 $('.supportButton').mouseover(function(){
   $(this).css('background-color', 'hsl(125, 62%, 32%)');
 }).mouseout(function(){
   $(this).css('background-color', 'hsl(226, 96%, 13%)');
 });

 var ticker = $('.ticker');
 ticker.each(function(){
   var margin = $(this),indent = margin.width();
   margin.ticker = function(){
     indent--;
     margin.css('text-indent', indent);
     if(indent < -1 * margin.children('.dataContainer').width()){
       indent = margin.width()
     }
   };
   margin.data('interval', setInterval(margin.ticker, 1000/60));
 });

 $.get('https://skbe.herokuapp.com/symbols/prices', function(data){
  //  var sortedData = data.sort();
  //  console.log(data);
   for(var i = 0; i < data.length; i++){
     var stockTickerDiv = document.createElement('div');
     var price = data[i].current_price;
     stockTickerDiv.innerText = data[i].symbol + "       " + price + "        " + ((data[i].volume) / 1000) + "k";
     $('.dataContainer').append(stockTickerDiv);
    //  console.log(stockTickerDiv);
   }
 })

 $.get('https://skbe.herokuapp.com/users/portfolio', function(data){
   for(var i = 0; i < data.length; i++){
     var stockRow = document.createElement('tr');
     $('.portfolio').append(stockRow);

     var symbolField = document.createElement('td');
     var companyField = document.createElement('td');
     var numSharesField = document.createElement('td');
     var ppsField = document.createElement('td');
     var cspField = document.createElement('td');
     var percentChangeField = document.createElement('td');
     var dollarChangeField = document.createElement('td');

     symbolField.innerText = (data[i].symbol);
     companyField.innerText = (data[i].companyName);
     numSharesField.innerText = (data[i].shares);
     ppsField.innerText = ((data[i].value / data[i].shares)).toFixed(2);
     cspField.innerText = (data[i].currentSharePrice);
     percentChangeField.innerText = (data[i].percentChange);
     dollarChangeField.innerText = (data[i].dollarChange);


     $(stockRow).append(symbolField);
     $(stockRow).append(companyField);
     $(stockRow).append(numSharesField);
     $(stockRow).append(ppsField);
     $(stockRow).append(cspField);
     $(stockRow).append(percentChangeField);
     $(stockRow).append(dollarChangeField);
    }
  })

$('.buyButton').on('click', function(event){
  event.preventDefault();
  var quantityData = $('.quantityInputVal').val();
  console.log(quantityData);
  var stockSymbol = $('.stockSymbolVal').val();
  console.log(stockSymbol);
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/users/buy'
    // 'https://skbe.herokuapp.com/users/buy'
    ,
    data: {symbol: stockSymbol, qty: quantityData},
    success: buyCreationMessage(),
    dataType: JSON
  })
})

 function buyCreationMessage(){
   $('.buyCreationMessage').fadeIn(300).delay(2000).fadeOut(300);
   console.log('Purchase Successful');
  //  update portfolio
 }

// Sample Chart

// var ctx = document.getElementById('sampleChart').getContext('2d');
// var symbolsData = $.get('http://localhost:3000/symbols/prices');
// var firstTenNames = function(symbolsData){
//   var container = [];
//   for(var i = 0; i < 10; i++){
//     container.push(symbolsData[i].name);
//   }
//   console.log(container);
//   return container;
// };
// console.log(firstTenNames);
//
// var firstTenDatapoints = function(symbolsData){
//   var container = [];
//   for(var i = 0; i < 10; i++){
//     container.push(symbolsData[i].current_price);
//   }
//   console.log(container);
//   return container;
// };
// console.log(firstTenDatapoints);
// var chartData = {
//   labels: firstTenNames,
//   datasets: [
//     {
//     label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: firstTenDatapoints
//     }
//   ]
// }
// var newChart = new Chart(ctx).Bar(chartData);

})
