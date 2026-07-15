import React, { useEffect } from 'react'
import ImageElement from './portfolio/ImageElement.jsx'
import work1 from '../assets/img/works/1.jpg'
import work2 from '../assets/img/works/2.jpg'
import work3 from '../assets/img/works/3.jpg'
import work4 from '../assets/img/works/4.jpg'
import work5 from '../assets/img/works/5.jpg'
import work6 from '../assets/img/works/6.jpg'
import work7 from '../assets/img/works/7.jpg'
import work8 from '../assets/img/works/8.jpg'

export default function Portfolio() {
	const items = [
		{ id: 1, type: 'web', image: work1 },
		{ id: 2, type: 'icon', image: work2 },
		{ id: 3, type: 'graphic', image: work3 },
		{ id: 4, type: 'web', image: work4 },
		{ id: 5, type: 'web', image: work5 },
		{ id: 6, type: 'icon', image: work6 },
		{ id: 7, type: 'web', image: work7 },
		{ id: 8, type: 'graphic', image: work8 },
	];

	useEffect(( ) => {
		// initialize jQuery quicksand filtering for SPA route
		const $ = window.jQuery || window.$;
		if (!$) return;
		if (!$.fn || !$.fn.quicksand) return;

		// Clone items to get a fresh collection to filter from
		const $data = $(".portfolio").clone();

		const clickHandler = function (e) {
			e.preventDefault();
			$(".filter li").removeClass("active");
			const filterClass = $(this).attr('class').split(' ').slice(-1)[0];
			let $filteredData;
			if (filterClass === 'all') {
				$filteredData = $data.find('.item-thumbs');
			} else {
				$filteredData = $data.find('.item-thumbs[data-type=' + filterClass + ']');
			}
			$(".portfolio").quicksand($filteredData, {
				duration: 600,
				adjustHeight: 'auto'
			}, function () {
				// re-init fancybox on the new items
				if ($.fancybox) {
					$(".fancybox").fancybox({
						padding: 0,
						beforeShow: function () {
							this.title = $(this.element).attr('title');
							this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
						},
						helpers: { title: { type: 'inside' } },
					});
				}
			});
			$(this).addClass('active');
			return false;
		};

		$('.filter li').off('click', clickHandler).on('click', clickHandler);

		return () => {
			try { $('.filter li').off('click', clickHandler); } catch { /* jQuery may already be gone */ }
		};
	}, []);

return (
    <>
		<section id="inner-headline">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="pageTitle">Portfolio</h2>
					</div>
				</div>
			</div>
		</section>

		<section id="content">
			<div className="container">
				
				<div className="row">
					<div className="col-lg-12">
						<ul className="portfolio-categ filter">
							<li className="all active"><a href="#">All</a></li>
							<li className="web"><a href="#" title="">Web design</a></li>
							<li className="icon"><a href="#" title="">Mobile App</a></li>
							<li className="graphic"><a href="#" title="">UI design</a></li>
						</ul>

						<div className="clearfix">
						</div>

						<div className="row">
							<section id="projects">
								<ul id="thumbs" className="portfolio">
									{items.map((item) => (
										<ImageElement key={item.id} image={item.image} type={item.type} id={item.id} />
									))}
								</ul>
							</section>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
  	)
}
