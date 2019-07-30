import React from 'react';

const Footer = (props) => {
    return (
        <footer className="page-footer blue pt-4">
            <div className="container-fluid">
                { props.children }
            </div>
            { props.footerSub }
        </footer>
    );
}

export const FooterSub = (props) => {
    return (
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
    );
}

export default Footer;