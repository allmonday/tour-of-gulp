Vue.filter('reverse', (value)-> 
	return value.split('').reverse().join(''))

items = new Vue 
	el: '#items'
	data: 
		items :[
			'eat',
			'drink',
			'ridding',
			'writting',
			'ssss'
		]
