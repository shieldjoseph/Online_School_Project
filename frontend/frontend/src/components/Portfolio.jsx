import React, { useEffect } from 'react'

import work1 from '../assets/img/works/1.jpg'
import work2 from '../assets/img/works/2.jpg'
import work3 from '../assets/img/works/3.jpg'
import work4 from '../assets/img/works/4.jpg'
import work5 from '../assets/img/works/5.jpg'
import work6 from '../assets/img/works/6.jpg'
import work7 from '../assets/img/works/7.jpg'
import work8 from '../assets/img/works/8.jpg'

export default function Portfolio() {
	useEffect(() => {
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
			try { $('.filter li').off('click', clickHandler); } catch (e) {}
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

									<li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="web">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work1}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work1} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 design" data-id="id-1" data-type="icon">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work2}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work2} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 photography" data-id="id-2" data-type="graphic">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work3}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work3} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="web">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work4}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work4} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 photography" data-id="id-4" data-type="web">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work5}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work5} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 photography" data-id="id-5" data-type="icon">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work6}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work6} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="web">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work7}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work7} alt="" />
									</li>

									<li className="item-thumbs col-lg-3 design" data-id="id-0" data-type="graphic">
										<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Portfolio name" href={work8}>
										<span className="overlay-img"></span>
										<span className="overlay-img-thumb"><i className="icon-info-blocks fa fa-code"></i></span>
										</a>
										<img src={work8} alt="" />
									</li>
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
