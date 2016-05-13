


//---------------------- TABURI ---------------------------------

// require('./style.scss');

var $ = require('jquery');
var  React = require('react');
var ReactDom = require('react-dom');
var TabList = require('./tab-list.js');
var Content = require('./content.js');
var Dialog = require('./dialog.js');


class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			activeIdx: 0,
			tabs: [{
				name: 'Acadele',
				content: 'O acadea este o bomboană pe un băț. Aceasta este de formă ovală, aplatizată sau sfirică din zahăr topit sau ciocolată care stă pe un băț din lemn, celuloză sau material plastic, mai rar din materiale comestibile (gumă de mestecat).'
			},
			{
				name: 'Bomboane',
				content: 'Bomboana este un produs de cofetărie de mărimi reduse, fabricat din sirop de zahăr aromatizat, ciocolată etc., având culoare, gust și formă foarte variate.'
			},
			{
				name: 'Ciocolata',
				content: 'Ciocolata este un produs alimentar obținut dintr-un amestec de cacao, zahăr, uneori lapte și unele arome specifice. Ciocolata este servită, de obicei, sub formă de tabletă, baton, praline, înghețată sau alte produse de cofetărie.'
			}],
		askForTab: false
		}
	}

	render(){
		console.log(this.state.askForTab);
		var selected = this.state.activeIdx;
		return (
			<div className="container">
				<div className="title">
					CandyShop
				</div>
				<TabList list={this.state.tabs} selectTab={this.handleClick.bind(this)} />
				<Content content={this.state.tabs[selected].content} />
				<button className="add-tab" onClick={this.addTab.bind(this)}>Add</button>
				{this.state.askForTab ? <Dialog onDialogOk={this.onDialogOk.bind(this)}/> : null}
			</div>
		);
	}
	handleClick(index){
		var newState = {
			activeIdx: index
		}
		this.setState(newState);
	}
	addTab(){
		var newState = {
			askForTab: true
		}
		this.setState(newState);
	}
	onDialogOk(title,content){
		var newState = {}
		newState.tabs = this.state.tabs.concat({name: title, content});
		newState.askForTab = false;
		console.log(arguments);
		this.setState(newState);
	}
}

ReactDom.render(<App />, document.getElementById('app'));

//---------------------- EXEMPLU MARIAN ---------------------------------

//DOM ready
// $(function(){
  
//   var activateElement = function(idx) {
//     state.activeIdx = idx;
//     render();
//   };
//   var addElement = function(c, idx) {
//     var cn = '', ccn ='';
//     if (idx === state.activeIdx) {
//       cn = 'active';//tab
//       ccn = 'visible';//content - clasa
//     }
//     //` template strings
//     var tab = $(`<li data-for="${c}" class="${cn}">${c}</li>`);
//     tab.on('click', function() {
//       activateElement(idx);
//     });
//     var content = `<div id="${c}" class=${ccn}>Content for: ${c}</div>`;
//     $('ul').append(tab);
//     $('.content').append(content);
//   };
  
  
//   var state = {
//     activeIdx: 0,
//     elements: ['trei', '222']
//   };
  
//   var render = function(){
//   	console.log(state);
//     $('ul').empty();
//     $('.content').empty();
//     state.elements.forEach(addElement);
//   };
  
//   render();
  
//   $('button').on('click', function() {
//     state.elements.push('new' + ($('li').length + 1));
//     render();
//   });
// });