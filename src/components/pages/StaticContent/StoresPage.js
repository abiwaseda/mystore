/**
 * Imports
 */
import React from 'react';

// Required components
import Heading from '../../common/typography/Heading';

/**
 * Component
 */
class StoresPage extends React.Component {

    //*** Page Title and Snippets ***//

    static pageTitleAndSnippets = function (context, params, query) {
        return {
            title: 'As Nossas Lojas'
        }
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./StoresPage.scss');
    }

    //*** Template ***//

    render() {
        return (
            <div className="stores-page">
                <div className="stores-page__title">
                    <Heading size="large">
                        Our Offices
                    </Heading>
                </div>
                <div className="stores-page__content">
                    <div className="stores-page__block">
                        <Heading size="medium">
                            Japan, Tokyo Office
                        </Heading>
                        <p>
                            169-0077 Takadanobaba 1-31-7<br />
                            Shinjuku, Tokyo, Japan<br />
                            <br />
                            <a href="https://goo.gl/maps/8Ud2Bym4sWD2" target="_blank">Google Maps</a>
                        </p>
                        <p className="stores-page__schedule">
                            <strong>Office Open Time:</strong><br />
                            Monday - Firday : 10 am - 5pm JST<br />
                            Saturday, Sunday and National holiday : closed<br />
                        </p>
                        <p className="stores-page__contacts">
                            <strong>Contact:</strong><br />
                            03 1111 1111
                        </p>
                    </div>
                    <div className="stores-page__block">
                        <Heading size="medium">
                            Nepal, Pokhara Office
                        </Heading>
                        <p>
                            33700 Parimarg<br />
                            Pokhara, Nepal<br />
                            <br />
                            <a href="https://goo.gl/maps/EDiVLejKfww" target="_blank">Google Maps</a>
                        </p>
                        <p className="stores-page__schedule">
                            <strong>Office Open Time:</strong><br />
                            Monday - Firday : 10 am - 5pm NPT<br />
                            Saturday, Sunday and National holiday : closed<br />
                        </p>
                        <p className="stores-page__contacts">
                            <strong>Contact:</strong><br />
                            +977 61-463477
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Exports
 */
export default StoresPage;
