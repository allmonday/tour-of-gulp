demo = new Vue 
	el: '#demo'
	data:
		message: 'hello vue'

demo2 = new Vue
	el: "#demo2"
	data:
		title: 'todos',
		todos: [
			{done: true, content: 'learn js'},
			{done: false, content: 'learn vue'}
		]

data = [1,2,3,4,5]
console.log data
