import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="center">
                <ul className="social">
                    <li><a href="mailto:horchataclub@gmail.com" className="button"><i className="fa fa-envelope-o"></i></a></li>
                    <li><a href="https://twitter.com/horchata_club" className="button"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com/horchataclub/" className="button"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://github.com/Arlefreak/HorchataClubClient" className="button"><i className="fa fa-github"></i></a></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
