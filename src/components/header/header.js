import React, { Component } from 'react';

class Header extends Component {
	
	render() {
		return (
		    <header id="header" class="horizontal-w  sm-rgt-mn  w-header-type-10">
		        <div class="container">
		            <div class="col-md-3 col-sm-3 logo-wrap">
		                <div class="logo">
		                    <a href="http://www.shopstack.asia/"><img src="./abc_files/shopstack-logo-email.png" width="210"
		                                                              id="img-logo-w1" alt="Shopstack Asia" class="img-logo-w1"
		                                                              style="width: 210px"></a><a
		                        href="http://www.shopstack.asia/"><img src="./abc_files/shopstack-logo-email.png" width="280"
		                                                               id="img-logo-w2" alt="Shopstack Asia" class="img-logo-w2"
		                                                               style="width: 280px"></a><span class="logo-sticky"><a
		                        href="http://www.shopstack.asia/"><img src="./abc_files/shopstack-logo-email.png" width="60"
		                                                               id="img-logo-w3" alt="Shopstack Asia"
		                                                               class="img-logo-w3"/></a></span></div>
		            </div>
		            <nav id="nav-wrap" class="nav-wrap1 col-md-9 col-sm-9">
		                <div id="menu-icon"><i class="fa-navicon"></i> <span>Menu - </span><span
		                        class="mn-clk">Navigation</span><span class="mn-ext1"></span><span class="mn-ext2"></span><span
		                        class="mn-ext3"></span></div>
		                <div id="menu-icon"><i class="fa-navicon"></i> <span>Menu - </span><span
		                        class="mn-clk">Navigation</span><span class="mn-ext1"></span><span class="mn-ext2"></span><span
		                        class="mn-ext3"></span></div>
		                <div class="container">
		                    <div id="search-form">
		                        <a href="javascript:void(0)" class="search-form-icon"><i id="searchbox-icon"
		                                                                                 class="fa-search"></i></a>
		                        <div id="search-form-box" class="search-form-box">
		                            <form action="http://www.shopstack.asia/" method="get">
		                                <input type="text" class="search-text-box" id="search-box" name="s">
		                            </form>
		                        </div>
		                    </div>
		                    <ul id="nav">
		                        <li id="menu-item-9557"
		                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9557"><a
		                                href="http://www.shopstack.asia/" data-description="start here">Home</a></li>
		                        <li id="menu-item-9597"
		                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9597"><a
		                                href="http://www.shopstack.asia/index.php/about-us/"
		                                data-description="About Us">Company</a></li>
		                        <li id="menu-item-9596"
		                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9596"><a
		                                href="http://www.shopstack.asia/index.php/portfolio-shopstack/" data-description="">Portfolio</a>
		                        </li>
		                        <li id="menu-item-9592"
		                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9592"><a
		                                href="http://www.shopstack.asia/index.php/contact-us/" data-description="connect now">Contact</a>
		                        </li>
		                    </ul>
		                </div>
		            </nav>
		        </div>
		    </header>
		)
	}
}

export default Header;