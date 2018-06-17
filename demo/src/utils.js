const urls = [
    {name: 'Home', path:'/', Page: require('./pages/WelcomePage'), exact:true},
    {name: 'Toggle', path:'/toggle', Page: require('./pages/Toggle')},
    {name: 'TimePicker', path:'/timepicker', Page: require('./pages/TimePicker')},
    {name: 'About', path:'/about', Page: require('./pages/About')},
]

export default urls
