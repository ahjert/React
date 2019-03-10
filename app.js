const title = <h1>My First React Element!</h1>;
const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;

const header = React.createElement(
	'header',
	null,
	title,
	desc
);

ReactDOM.render(
	header,
	document.getElementById('root')
);

// console.log(title);

//var url = "https://squarespace.zendesk.com/api/v2/help_center/en-us/categories/200290338/articles.json?"
//
//url = $.map(url, function(page, i) {
//    return (page + "page=" (pageNumber + 1);
//})
//
//_.each(url, function(page) {
//  url[]
//})


//var map = {};
//  _.each(sections, function(section){
//    map[section.id] = section.category_id;
//  });
//  return map;
//};

// pageNumber = 1;
//
// function page(number) {
//   pageNumber += 1++;
// }
//
// console.log(pageNumber);
