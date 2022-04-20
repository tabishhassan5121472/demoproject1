import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer class="hidden-print">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <ul>
                                <li><strong>ORDERING</strong></li>
                                <li><a href="/" data-toggle="modal" data-target="#SigninForm" data-backdrop="static">Customer Login</a></li>
                                <li><a href="mailto:sales@sowatool.com?subject=Information Request regarding opening an account">Open an Account</a></li>
                                <li><a href="/" data-toggle="modal" data-target="#SigninForm" data-backdrop="static">Forgot Password</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul>
                                <li><strong>DOWNLOAD CENTRE</strong></li>
                                <li><a href="../../../DownloadCenter/1">Catalogs &amp; Brochures</a></li>
                                <li><a href="../../../DownloadCenter/4">Distributor Promotions</a></li>
                                <li><a href="../../../DownloadCenter/5">Home Territory Promotions</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul>
                                <li><strong>COMPANY INFO</strong></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Customer Feedback</a></li>
                                <li><a href="/" target="_blank">Email List</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul>
                                <li><strong>CONNECT WITH US</strong></li>
                                <li></li>
                                <li><strong>HAVE QUESTIONS?</strong></li>
                                <li>
                                    <h3>1.800.265.8221</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;