import template from './template.html'

console.log(template)

require.ensure([], () => {
	window.onload = function() {
	let body = document.getElementsByTagName('body')[0]
	console.log(body)
	body.innerHTML = template
}
})

