
exports.environment = {
	Local: 'http://localhost:3030',
	QA: 'http://todomvc.com/examples/react/#'
}

exports.navigatePages = {
	Insights : '/ownr-insights',
	Payment: '/payment',
	Logojoy_Addon: '/logo-landing',
	Logojoy_Standalone: '/logo'
}

exports.dynamicTodo =  function() {
	return `Todo ${Date.now()}`;
};