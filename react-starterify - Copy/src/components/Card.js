import React from 'react';

const Card = () => (
  <div>
    <article className="card">
      <header className="card__thumb">
			<a href="#"><img src="http://www.uwe.ac.uk/externalHome/img/ug-home.jpg" /></a>
		</header>
		<div className="card__date">
			<span className="card__date__day">2016</span>
			<span className="card__date__month">Entry</span>
		</div>
		<div className="card__body">
			<div className="card__category"><a href="#">Postgraduate</a></div>
			<div className="card__title"><a href="#">English with Writing</a></div>
			<div className="card__subtitle">Donec posuere vulputate</div>
			<p className="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque recusandae, modi dolore velit, illum itaque minus inventore, omnis et nisi rem facere.</p>
			<button className="button round">Apply Now</button>
		</div>
		<footer className="card__footer">
			<span className="icon icon--time">Share</span>
			<span className="icon icon--comment"><a href="#">2 comments</a></span>
		</footer>
		</article>
    </div>

);

export default Card;

