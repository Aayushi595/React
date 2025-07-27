const heading = React.createElement('div', {id : 'head', xyz : 'abc'}, React.createElement('div', {id : 'parent', xyz : 'abc'}, [React.createElement('div', {id : 'child', xyz : 'abc'}, 'Hello React1'), React.createElement('div', {id : 'child', xyz : 'abc'}, 'Hello React2')]))   
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)



//two childs of head 

const heading2 = React.createElement('div', {id:'head'},  [React.createElement('div', {class : 'parent', xyz : 'abc'}, [React.createElement('h1', {class : 'child', xyz : 'abc'}, 'child1'), React.createElement('h1', {class : 'child', xyz : 'abc'}, 'child2')]), React.createElement('div', {class : 'parent', xyz : 'abc'}, [React.createElement('h1', {class : 'child', xyz : 'abc'}, 'child1'), React.createElement('h1', {class : 'child', xyz : 'abc'}, 'child2')])])
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(heading2)






















//react is called as a js library also, it can run into a portion of the DOM / screen independently, react can work at the place, whatever we define as root to it, So it work only in haeder, footer, sidebar etc.
//react is a global object , and react.createElement creates a react element , which results in object format when logged
//render method is responsible to convert this obj to h1 tag / html (which browser understands) and render in the the DOM in browser.

//other frameworks - require the complete app to be built using it, but react can work into our existing apps, which are not completely built using react

//CDNs often serve content from a different domain (origin) than your main website. This introduces what's called a cross-origin request.

//CDN stands for Content Delivery Network. It's a geographically distributed network of servers that delivers web content (like images, scripts, videos, CSS, JS, etc.) to users based on their location. It is a cross-origin request as often serve content from a different domain (origin) than your main website. CDN caches files.
// Faster Load Times, Reduced Server Load, Better Scalability - Handles traffic spikes without crashing your server, High Availability-If one CDN server goes down, others can serve the content (failover), 
//higher seo ranks.


