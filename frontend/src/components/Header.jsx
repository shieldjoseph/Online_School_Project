import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/courses", label: "Courses" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/pricing", label: "Pricing" },
  { path: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <>
        <header>

			<div className="navbar navbar-default navbar-static-top">
				<div className="container">
                    
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<Link className="navbar-brand" to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					
					<div className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							{navItems.map((item, index) => (
								<li key={index} className={item.path == "/" ? "active" : ""}>
									<Link to={item.path}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
                
		</header>
    </>
  );
}