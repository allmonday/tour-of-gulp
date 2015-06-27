$ -> FastClick.attach document.body

$('#close-screen').click -> $('.all-cover').fadeOut "slow"
$('#show-screen').click -> $('.all-cover').fadeIn "slow"

$('#close-screen').data 'name', 'hello'
console.log $('#close-screen').data 'name'

$('#close-screen').animate left: 200
