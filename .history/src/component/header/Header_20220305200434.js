import React from 'react';
import logo from '../../commonResources/images/icons/logo-sm.png';
import { Link } from 'react-router-dom';
import { data, data2 } from './data';

function NavBarItems(props) {
	const { href, link, img } = props;

	return (
		<li className="nav-item">
			<a className="nav-link js-scroll-trigger" href={href}>
				{link}
				{img}
			</a>
		</li>
	);
}

function NavBarWithIcon(props) {
	const { href, homeIcon } = props;

	return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={href}>
				<img src={homeIcon} />
			</Link>
		</li>
	);
}

function Header() {
	return (
		<section className="header mb-5">
			<div className="nav-wrapper fixed-top ">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							☰
						</button>
						<Link className="navbar-brand mx-auto" to="/">
							{' '}
							<img src={logo} />{' '}
						</Link>

						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								{data.map((prop) => {
									return <NavBarItems key={prop.id} {...prop} />;
								})}
								{data2.map((prop) => {
									return <NavBarWithIcon key={prop.id} {...prop} />;
								})}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</section>
	);
}

export default Header;

//ReactDom.render(<BooksList/>, document.getElementById('root'))
