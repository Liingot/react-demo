import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/components/header';
import Content from './js/components/content';
import Footer from './js/components/footer';
import * as serviceWorker from './serviceWorker';

const s= 12323;

// ReactDOM.render(<div><Header/> <Content userid={s} userName = "Liingot"/> <Footer /></div>, document.getElementById('root'));

ReactDOM.render(<div><Header/> <Content userid={s} /> <Footer /></div>, document.getElementById('root'));
serviceWorker.unregister();
