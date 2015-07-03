$ -> FastClick.attach document.body

# $('#close-screen').click -> $('.all-cover').fadeOut "slow"
# $('#show-screen').click -> $('.all-cover').fadeIn "slow"

# $('#close-screen').data 'name', 'hello'
# console.log $('#close-screen').data 'name'

# $('#close-screen').animate left: 200

fill= (container, liquid="coffee") ->
	"filling the #{container} with #{liquid}"

console.log fill "woman","sporn"

award = (first, second, other...) ->
	gold = first
	silver = second
	rest = other

eat = (food)-> 
	console.log "i am eating #{food}.."

class Animal
	constructor: (@name) ->
	move: (meter) ->
		console.log @name + " moved #{meters}m"

class Snake extends Animal
	move: ->
		alert "snake"
		super 5
