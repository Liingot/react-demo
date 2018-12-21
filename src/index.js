import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/components/header';
import Content from './js/components/content';
import Footer from './js/components/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><Header/> <Content userid="010202" userName = "Liingot"/> <Footer /></div>, document.getElementById('root'));
serviceWorker.unregister();
