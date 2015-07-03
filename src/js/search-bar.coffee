searchBar = new Vue 
	el: "#search-bar"
	data:
		searchContent: "hello"
	methods: 
		addItem: (e) -> 
			items.items.push this.searchContent
		removeItem: (e) ->
			items.items.pop()
