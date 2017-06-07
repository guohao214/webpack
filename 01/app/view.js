import template from './template.html'

console.log(template)

alert(222333)

require.ensure([], () => {
	setTimeout(function() {
		let body = document.getElementsByTagName('body')[0]
		console.log(body)
		body.innerHTML = template
	}, 0)
})

